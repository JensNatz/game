class World {
    soundThememusic = new Audio('assets/audio/soundtrack.mp3');
    hero = new Hero();
    laserbeam = new Laserbeam();
    tokens = [
        new BombToken(500),
        new BombToken(700),
        new HealthpackToken(800)
    ]
    bombs = [];
    bullets = []
    bombSymbols = [];
    enemies;
    statusbar = new Statusbar();
    backgrounds;
    foregrounds;
    length;

    canvas;
    ctx;
    keyboard;
    cameraX = 0;

    constructor(canvas, keyboard, level) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.loadLevel(level);
        this.setWorld();
        this.draw();
        this.runGame();
    }

    loadLevel(level) {
        this.enemies = level.enemies;
        this.backgrounds = level.backgrounds;
        this.foregrounds = level.foregrounds;
        this.length = level.length;
    }

    setWorld() {
        this.hero.world = this;
        this.enemies.forEach(enemy => {
            enemy.world = this;
        })
    }

    drawObject(object) {
        if (object.otherDirection) {
            this.flipImage(object);
        }
        this.ctx.drawImage(object.img, object.posX, object.posY, object.width, object.height);
        if (object.otherDirection) {
            this.reverseFlipImage(object);
        }
    }

    flipImage(object) {
        this.ctx.save();
        this.ctx.translate(object.width, 0);
        this.ctx.scale(-1, 1);
        object.posX = object.posX * -1;
    }

    reverseFlipImage(object) {
        this.ctx.restore();
        object.posX = object.posX * -1;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.cameraX, 0);
        this.backgrounds.forEach(background => {
            this.drawObject(background);
        })
        this.drawObject(this.hero);

        this.enemies.forEach(enemy => {
            this.drawObject(enemy);
        })

        this.bombs.forEach(bomb => {
            this.drawObject(bomb);
        })

        this.bullets.forEach(bullet => {
            this.drawObject(bullet);
        })

        this.tokens.forEach(token => {
            this.drawObject(token);
        })

        if (this.hero.currentState == 'attacking') {
            this.drawObject(this.laserbeam);
        }

        this.foregrounds.forEach(foreground => {
            this.drawObject(foreground);
        })

        this.ctx.translate(this.cameraX * -1, 0);

        this.drawObject(this.statusbar);

        this.bombSymbols.forEach(symbol => {
            this.drawObject(symbol);
        })

        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    };

    runGame() {
        // this.soundThememusic.play();

        setInterval(() => {
            this.removeExplodedBombsFromWorld();
            this.updateStatusbar();

            for (let i = this.tokens.length - 1; i >= 0; i--) {
                const token = this.tokens[i];
                let distanceTokenToHero = this.calcDistance(token, this.hero);
                if (distanceTokenToHero < 50) {
                    this.removeTokenFromWorld(i);
                    if (token instanceof BombToken) {
                        this.hero.addBombToInventory();
                        this.addBombSymbolToStatusbar();
                    }
                    if (token instanceof HealthpackToken) {
                        this.hero.applyHealthPack(token.addHp)
                    }
                }
            }

            this.enemies.forEach(enemy => {
                if (enemy.currentState != 'dead') {
                    let distanceToEnemy = this.calcDistance(enemy, this.hero);

                    if (enemy instanceof EnemyWithClub) {
                        enemy.actBasedOnDistance(distanceToEnemy, this.hero);
                    }

                    if (enemy instanceof EnemyWithGun) {
                        enemy.shootAtHeroIfDeteced();
                    }

                    if (this.hero.currentState == 'attacking' && this.isHitByLaserbeam(enemy)) {
                        enemy.reactToLaserbeam(this.laserbeam.power);
                    }

                    if (distanceToEnemy <= enemy.detectionRange) {
                        enemy.detectHero();
                    }

                    this.bombs.forEach(bomb => {
                        let distanceBombToEnemy = this.calcDistance(enemy, bomb);
                        if (distanceBombToEnemy < bomb.range) {
                            bomb.explode(enemy);
                        }
                    });
                }
            })


            for (let i = this.bullets.length - 1; i >= 0; i--) {
                const bullet = this.bullets[i];
                let distanceBulletToHero = this.calcDistance(bullet, this.hero);

                if (distanceBulletToHero < 100) {
                    if (this.hero.isVulnerable()) {
                        this.hero.takeDamage(bullet.power);
                    }
                    this.removeBulletFromWorld(i);
                }
            }
        }, 100);
    }


    calcDistance(obj, obj2) {
        let dx = (obj.posX + obj.width / 2) - (obj2.posX + obj2.width / 2);
        let dy = (obj.posY + obj.height / 2) - (obj2.posY + obj2.height / 2);
        if (obj2 instanceof Hero) {
            dy = dy - obj2.offsetY;
        }
        let distance = Math.sqrt(dx * dx + dy * dy);
        return distance;
    }

    isHitByLaserbeam(enemy) {
        let enemyOffsetX = 260;  // Horizontaler Leerraum (links und rechts)
        let enemyOffsetY = 240;  // Vertikaler Leerraum (oben und unten)

        if (this.laserbeam.posX < enemy.posX + enemy.width - enemyOffsetX &&
            this.laserbeam.posX + this.laserbeam.width > enemy.posX + enemyOffsetX &&
            this.laserbeam.posY < enemy.posY + enemy.height - enemyOffsetY &&
            this.laserbeam.posY + this.laserbeam.height > enemy.posY + enemyOffsetY) {
            console.log('gelaser');

            return true;
        } else {
            return false;
        }
    }

    addBombSymbolToStatusbar() {
        let offsetX = (this.hero.numberOfBombs - 1) * 50
        let bombSymbol = new BombSymbol(offsetX);
        this.bombSymbols.push(bombSymbol);
    }

    removeTokenFromWorld(index) {
        this.tokens.splice(index, 1);
    }

    removeBulletFromWorld(index) {
        this.bullets.splice(index, 1);
    }

    removeExplodedBombsFromWorld() {
        this.bombs = this.bombs.filter(bomb => !bomb.isExploded);
    }

    updateStatusbar() {
        this.statusbar.updateStatus(this.hero.hp);
    }
}