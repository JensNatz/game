class World extends IntervalGenerator {
    sounds = {
        thememusic: new Audio('assets/audio/soundtrack.mp3'),
    };
    hero = new Hero();
    laserbeam = new Laserbeam();
    tokens = [];
    bombs = [];
    projectiles = []
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
    isMuted = false;

    constructor(canvas, keyboard, level) {
        super();
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.loadLevel(level);
        this.setWorld();
        this.sounds.thememusic.loop = true;
        this.draw();
        this.setStoppableInterval(this.runGame.bind(this));
    }

    loadLevel(level) {
        this.enemies = level.enemies;
        this.tokens = level.tokens;
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

        this.projectiles.forEach(projectile => {
            this.drawObject(projectile);
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
        if(this.hero.dieAnimationPlayed == true){
            this.muteSounds();
            this.stopGame();
        }
        if (!this.isMuted) {
            this.sounds.thememusic.play();
        }
        this.removeExplodedRpojectilesFromWorld();
        this.updateStatusbar();

        for (let i = this.tokens.length - 1; i >= 0; i--) {
            const token = this.tokens[i];
            let distanceTokenToHero = this.calcDistance(token, this.hero);
            if (distanceTokenToHero < 50) {
                this.removeTokenFromWorld(i);
                if (token instanceof BombToken) {
                    this.hero.addBombToInventory();
                    if (!this.isMuted) {
                        token.sounds.pickup.play();
                    }
                    this.addBombSymbolToStatusbar();
                }
                if (token instanceof HealthpackToken) {
                    this.hero.applyHealthPack(token)
                }
            }
        }

        this.enemies.forEach(enemy => {
            if (enemy.currentState != 'dead') {
                let distanceToEnemy = this.calcDistance(enemy, this.hero);

                if (enemy instanceof EnemyWithClub) {
                    enemy.actBasedOnDistance(distanceToEnemy, this.hero);
                }

                if (enemy instanceof EnemyWithGun || enemy instanceof Drone) {
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

        for (let i = this.projectiles.length - 1; i >= 0; i--) {
            const projectile = this.projectiles[i];
            let distanceBulletToHero = this.calcDistance(projectile, this.hero);

            if (distanceBulletToHero < 150) {
                if (this.hero.isVulnerable()) {

                    if (projectile instanceof Bullet) {
                        this.hero.takeDamage(projectile.power);
                        this.removeProjectileFromWorld(i);
                    }

                    if (projectile instanceof Rocket) {
                        projectile.explode(this.hero);
                    }
                }
            }
        }
    }

    stopGame(){
        this.stopAllIntervals();
        this.sendGameEndEventToCanvas();
    }

    stopAllIntervals(){
        this.stopIntervals();
        this.hero.stopIntervals();
        this.enemies.forEach(enemy => {
            enemy.stopIntervals();
        });
        this.bombs.forEach(bomb => {
            bomb.stopIntervals();
        });
        this.projectiles.forEach(projectile => {
            projectile.stopIntervals();
        });
    }

    sendGameEndEventToCanvas(){
        const event = new CustomEvent('gameOver');
        this.canvas.dispatchEvent(event);
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
        let enemyOffsetX = 260;
        let enemyOffsetY = 240;

        if (this.laserbeam.posX < enemy.posX + enemy.width - enemyOffsetX &&
            this.laserbeam.posX + this.laserbeam.width > enemy.posX + enemyOffsetX &&
            this.laserbeam.posY < enemy.posY + enemy.height - enemyOffsetY &&
            this.laserbeam.posY + this.laserbeam.height > enemy.posY + enemyOffsetY) {
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

    removeProjectileFromWorld(index) {
        this.projectiles.splice(index, 1);
    }

    removeExplodedRpojectilesFromWorld() {
        this.bombs = this.bombs.filter(bomb => !bomb.isExploded);
        this.projectiles = this.projectiles.filter(projectile => !projectile.isExploded);
    }

    updateStatusbar() {
        this.statusbar.updateStatus(this.hero.hp);
    }

    toggleMuteAll() {
        this.isMuted = !this.isMuted;
        this.hero.isMuted = !this.hero.isMuted;
        this.enemies.forEach(enemy => {
            enemy.isMuted = !enemy.isMuted;
        });
        this.bombs.forEach(bomb => {
            bomb.isMuted = !bomb.isMuted;
        });
        this.tokens.forEach(token => {
            token.isMuted = !token.isMuted;
        });
        this.projectiles.forEach(projectile => {
            projectile.isMuted = !projectile.isMuted;
        });

        if (this.isMuted) {
            this.muteSounds();
        }
    }

    muteSounds() {
        Object.values(this.sounds).forEach(sound => sound.pause());
    }
}