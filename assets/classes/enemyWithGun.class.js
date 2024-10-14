class EnemyWithGun extends Character {
    idleImages = [
        'assets/img/enemyWithGun/Idle/Idle_00.png',
        'assets/img/enemyWithGun/Idle/Idle_01.png',
        'assets/img/enemyWithGun/Idle/Idle_02.png',
        'assets/img/enemyWithGun/Idle/Idle_03.png',
        'assets/img/enemyWithGun/Idle/Idle_04.png',
        'assets/img/enemyWithGun/Idle/Idle_05.png',
        'assets/img/enemyWithGun/Idle/Idle_06.png',
        'assets/img/enemyWithGun/Idle/Idle_07.png',
        'assets/img/enemyWithGun/Idle/Idle_08.png',
        'assets/img/enemyWithGun/Idle/Idle_09.png',
        'assets/img/enemyWithGun/Idle/Idle_10.png',
        'assets/img/enemyWithGun/Idle/Idle_11.png',
        'assets/img/enemyWithGun/Idle/Idle_12.png',
        'assets/img/enemyWithGun/Idle/Idle_13.png',
    ]
    walkImages = [
        'assets/img/enemyWithGun/Walk/Walk_00.png',
        'assets/img/enemyWithGun/Walk/Walk_01.png',
        'assets/img/enemyWithGun/Walk/Walk_02.png',
        'assets/img/enemyWithGun/Walk/Walk_03.png',
        'assets/img/enemyWithGun/Walk/Walk_04.png',
        'assets/img/enemyWithGun/Walk/Walk_05.png',
        'assets/img/enemyWithGun/Walk/Walk_06.png',
        'assets/img/enemyWithGun/Walk/Walk_07.png',
        'assets/img/enemyWithGun/Walk/Walk_08.png',
        'assets/img/enemyWithGun/Walk/Walk_09.png',
        'assets/img/enemyWithGun/Walk/Walk_10.png',
        'assets/img/enemyWithGun/Walk/Walk_11.png',
        'assets/img/enemyWithGun/Walk/Walk_12.png',
        'assets/img/enemyWithGun/Walk/Walk_13.png'
    ];


    dieImages = [
        'assets/img/enemyWithGun/Death/Death_00.png',
        'assets/img/enemyWithGun/Death/Death_01.png',
        'assets/img/enemyWithGun/Death/Death_02.png',
        'assets/img/enemyWithGun/Death/Death_03.png',
        'assets/img/enemyWithGun/Death/Death_04.png',
        'assets/img/enemyWithGun/Death/Death_05.png',
        'assets/img/enemyWithGun/Death/Death_06.png',
        'assets/img/enemyWithGun/Death/Death_07.png',
        'assets/img/enemyWithGun/Death/Death_08.png',
        'assets/img/enemyWithGun/Death/Death_09.png',
        'assets/img/enemyWithGun/Death/Death_10.png',
        'assets/img/enemyWithGun/Death/Death_11.png',
        'assets/img/enemyWithGun/Death/Death_12.png',
        'assets/img/enemyWithGun/Death/Death_13.png',
        'assets/img/enemyWithGun/Death/Death_14.png',
        'assets/img/enemyWithGun/Death/Death_15.png',
        'assets/img/enemyWithGun/Death/Death_16.png',
        'assets/img/enemyWithGun/Death/Death_17.png',
        'assets/img/enemyWithGun/Death/Death_18.png',
        'assets/img/enemyWithGun/Death/Death_19.png',
        'assets/img/enemyWithGun/Death/Death_20.png',
        'assets/img/enemyWithGun/Death/Death_21.png',
        'assets/img/enemyWithGun/Death/Death_22.png',
        'assets/img/enemyWithGun/Death/Death_23.png'
    ];

    getHitImages = [
        'assets/img/enemyWithGun/GetHit/Get_Hit_00.png',
        'assets/img/enemyWithGun/GetHit/Get_Hit_01.png',
        'assets/img/enemyWithGun/GetHit/Get_Hit_02.png',
        'assets/img/enemyWithGun/GetHit/Get_Hit_03.png',
        'assets/img/enemyWithGun/GetHit/Get_Hit_04.png',
        'assets/img/enemyWithGun/GetHit/Get_Hit_05.png',
        'assets/img/enemyWithGun/GetHit/Get_Hit_06.png',
        'assets/img/enemyWithGun/GetHit/Get_Hit_07.png',
        'assets/img/enemyWithGun/GetHit/Get_Hit_08.png',
        'assets/img/enemyWithGun/GetHit/Get_Hit_09.png',
    ];

    shootImages = [
        'assets/img/enemyWithGun/Shoot/Shoot_00.png',
        'assets/img/enemyWithGun/Shoot/Shoot_01.png',
        'assets/img/enemyWithGun/Shoot/Shoot_02.png',
        'assets/img/enemyWithGun/Shoot/Shoot_03.png',
        'assets/img/enemyWithGun/Shoot/Shoot_04.png',
    ];

    getLaseredImages = [
        'assets/img/enemyWithGun/GetElectric/Get_Electric_0.png',
        'assets/img/enemyWithGun/GetElectric/Get_Electric_1.png',
        'assets/img/enemyWithGun/GetElectric/Get_Electric_2.png',
    ]

    soundShooting = new Audio('assets/audio/shoot.wav');
    soundTakeDamage = new Audio('assets/audio/pain1.wav');
    soundDie = new Audio('assets/audio/death1.wav')
    posY = 150;
    width = 650;
    height = 650;
    speed = 3;
    power = 10;
    hp = 15;
    standardImunityTime = 20;
    intervalBetweenShots = 30;
    timeToNextShot = 0;
    detectionRange = 800;
    hasDetectedHero = false;

    constructor() {
        super().loadImage(this.walkImages[0]);
        this.loadImagesInCache(this.idleImages);
        this.loadImagesInCache(this.walkImages);
        this.loadImagesInCache(this.dieImages);
        this.loadImagesInCache(this.getHitImages);
        this.loadImagesInCache(this.shootImages);
        this.loadImagesInCache(this.getLaseredImages);
        this.posX = 600 + Math.random() * 500;
        this.animate();
    }

    animate() {
        setInterval(() => {

            if (this.isDead() && !this.isBeingLasered() && !this.isTakingDamage) {
                this.playDieAnimation();
                if(!this.dieAnimationEnded){
                    this.soundDie.play();
                }
            } else {
                this.reduceLaserHitDuration();
                this.reduceDamageImmunityDuration();
                this.reduceTimeToNextShot();

                if (this.isTakingDamage) {
                    this.playGetHitAnimation();
                    this.soundTakeDamage.play();
                }
                else if (this.isBeingLasered()) {
                    this.playLaseredAnimation();
                    this.soundTakeDamage.play();
                }
                else if ((this.hasDetectedHero)) {
                    
                    this.lookAtHero()
                    if(this.timeToNextShot == 0){
                        this.timeToNextShot = this.intervalBetweenShots;
                        this.isAttacking = true;
                        let bullet = new Bullet(this.posX);
                        if(this.otherDirection){
                            bullet.posX = this.posX+this.width-100;
                            bullet.otherDirection = true;
                        }
                        this.world.bullets.push(bullet);
                    }
                    if(this.isAttacking){
                        this.soundShooting.play();
                        this.playShootAnimation()
                    } else {
                        this.playIdleAnimation();
                    }
                    
                } else {
                    this.playIdleAnimation();
                }
            }
        }, 1000 / 16);
    }

    lookAtHero() {
        if (this.posX + this.width / 2 > this.world.hero.posX + this.world.hero.width / 2) {
            this.otherDirection = false;
        } else {
            this.otherDirection = true;
        }
    }

    playShootAnimation() {
        this.ensureAnimationStartsAtBeginning(this.shootImages);
        this.playAnimation(this.shootImages);
        if (this.currentImg % this.shootImages.length == this.shootImages.length-1){
            this.isAttacking = false;
        }
    }

    reduceTimeToNextShot(){
        if(this.timeToNextShot > 0){
            this.timeToNextShot--;
        }
    }


}

