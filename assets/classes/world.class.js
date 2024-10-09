class World {
    hero = new Hero();
    laserbeam = new Laserbeam();
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
        this.checkForCollissions();
    }

    loadLevel(level){
        this.enemies = level.enemies;
        this.backgrounds  = level.backgrounds;
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

        if(object instanceof EnemyWithClub){
            this.ctx.fillRect(object.posX+ object.width/2, object.posY+object.height/2, 20, 20);
        }

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

        if(this.hero.isAttacking){
            this.drawObject(this.laserbeam);
        }

        this.foregrounds.forEach(foreground => {
            this.drawObject(foreground);
        })

        this.ctx.translate(this.cameraX*-1, 0);
        
        this.drawObject(this.statusbar);


        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    };

    checkForCollissions(){
        setInterval(() => {
            this.enemies.forEach(enemy => {
                if(this.hero.isAttacking && this.isHitByLaserbeam(enemy)){
                    console.log('treffer')
                }

                let distanceToEnemy = this.calcDistance(enemy);
                if(distanceToEnemy < enemy.minAttackingDistance){
                    enemy.isAttacking = true;
                    
                    if(this.hero.currentDamageImmunityDuration == 0){
                        this.hero.isTakingDamage = true;
                        this.hero.currentImg = 0;
                        this.hero.takeDamage(enemy.power);
                        this.statusbar.updateStatus(this.hero.hp);
                        this.hero.currentDamageImmunityDuration = this.hero.standardImunityTime;
                        console.log('nehme schaden', this.hero.hp)
                    }
                } else {
                    enemy.isAttacking = false;
                }
            })    
        }, 100);
    }

    calcDistance(obj) {
        let dx = obj.posX - this.hero.posX;
        let dy = obj.posY - this.hero.posY-this.hero.offsetY;
        let distance = Math.sqrt(dx * dx + dy * dy);
        return distance;
    }

    isHitByLaserbeam(enemy){
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