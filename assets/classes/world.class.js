class World {
    hero = new Hero();
    laserbeam = new Laserbeam();
    bombs = [];
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

        // if(object instanceof EnemyWithClub){
        //     this.ctx.fillRect(object.posX+ object.width/2, object.posY+object.height/2, 20, 20);
        // }

        if(object instanceof Hero){
            this.ctx.fillRect(object.posX+ object.width/2, object.posY+object.height/2+object.offsetY, 20, 20);
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
        this.ctx.fillStyle = 'red'; // Setzt die Füllfarbe auf Rot
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

        if (this.hero.isAttacking) {
            this.drawObject(this.laserbeam);
        }


        this.foregrounds.forEach(foreground => {
            this.drawObject(foreground);
        })

        this.ctx.translate(this.cameraX * -1, 0);

        this.drawObject(this.statusbar);


        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    };

    runGame() {
        setInterval(() => {
            this.bombs = this.bombs.filter(bomb => !bomb.isExploded);

            this.enemies.forEach(enemy => {
                if (!enemy.isDead()) {
                    if (this.hero.isAttacking && this.isHitByLaserbeam(enemy) && enemy.isVulnerable() && !enemy.isBeingLasered()) {
                        enemy.laserHitDuration = 10;
                        enemy.setImmunityToDamageTimer();
                        enemy.takeDamage(this.laserbeam.power);
                        console.log('treffer', enemy.hp)
                    }

                    let distanceToEnemy = this.calcDistance(enemy, this.hero);
                    if (distanceToEnemy < enemy.attackingDistance) {
                        enemy.isAttacking = true;
                        if (this.hero.isVulnerable()) {
                            this.hero.isTakingDamage = true;
                            this.hero.takeDamage(enemy.power);
                            this.statusbar.updateStatus(this.hero.hp);
                            this.hero.setImmunityToDamageTimer();
                            console.log('nehme schaden', this.hero.hp)
                        }
                    } else {
                        enemy.isAttacking = false;
                    }

                    this.bombs.forEach(bomb => {
                        let distanceBombToEnemy = this.calcDistance(enemy, bomb);
                        if(distanceBombToEnemy < bomb.range && bomb.isExploding == false){
                            bomb.isExploding = true;
                            enemy.isTakingDamage = true;
                            enemy.takeDamage(bomb.power);
                        }                        
                    });
                }
            })
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
            return true;
        } else {
            return false;
        }
    }
}