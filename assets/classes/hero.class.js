class Hero extends Character {
    idleImages = [
        'assets/img/hero/Idle/Idle_00.png',
        'assets/img/hero/Idle/Idle_01.png',
        'assets/img/hero/Idle/Idle_02.png',
        'assets/img/hero/Idle/Idle_03.png',
        'assets/img/hero/Idle/Idle_04.png',
        'assets/img/hero/Idle/Idle_05.png',
        'assets/img/hero/Idle/Idle_06.png',
        'assets/img/hero/Idle/Idle_07.png',
        'assets/img/hero/Idle/Idle_08.png',
        'assets/img/hero/Idle/Idle_09.png',
        'assets/img/hero/Idle/Idle_10.png',
        'assets/img/hero/Idle/Idle_11.png',
        'assets/img/hero/Idle/Idle_12.png',
        'assets/img/hero/Idle/Idle_13.png'
    ];
    walkImages = [
        'assets/img/hero/Walk/Walk_00.png',
        'assets/img/hero/Walk/Walk_01.png',
        'assets/img/hero/Walk/Walk_02.png',
        'assets/img/hero/Walk/Walk_03.png',
        'assets/img/hero/Walk/Walk_04.png',
        'assets/img/hero/Walk/Walk_05.png',
        'assets/img/hero/Walk/Walk_06.png',
        'assets/img/hero/Walk/Walk_07.png',
        'assets/img/hero/Walk/Walk_08.png',
        'assets/img/hero/Walk/Walk_09.png',
        'assets/img/hero/Walk/Walk_10.png',
        'assets/img/hero/Walk/Walk_11.png',
        'assets/img/hero/Walk/Walk_12.png',
        'assets/img/hero/Walk/Walk_13.png'
    ];
    jumpImages = [
        'assets/img/hero/Jump/Jump_00.png',
        'assets/img/hero/Jump/Jump_01.png',
        'assets/img/hero/Jump/Jump_02.png',
        'assets/img/hero/Jump/Jump_03.png',
        'assets/img/hero/Jump/Jump_04.png',
        'assets/img/hero/Jump/Jump_05.png',
        'assets/img/hero/Jump/Jump_06.png',
        'assets/img/hero/Jump/Jump_07.png',
        'assets/img/hero/Jump/Jump_08.png',
        'assets/img/hero/Jump/Jump_09.png',
        'assets/img/hero/Jump/Jump_10.png',
        'assets/img/hero/Jump/Jump_11.png',
        'assets/img/hero/Jump/Jump_12.png',
        'assets/img/hero/Jump/Jump_13.png'
    ];
    getHitImages = [
        'assets/img/hero/GetHit/Get_Hit_00.png',
        'assets/img/hero/GetHit/Get_Hit_01.png',
        'assets/img/hero/GetHit/Get_Hit_02.png',
        'assets/img/hero/GetHit/Get_Hit_03.png',
        'assets/img/hero/GetHit/Get_Hit_04.png',
        'assets/img/hero/GetHit/Get_Hit_05.png',
        'assets/img/hero/GetHit/Get_Hit_06.png',
        'assets/img/hero/GetHit/Get_Hit_07.png',
        'assets/img/hero/GetHit/Get_Hit_08.png',
        'assets/img/hero/GetHit/Get_Hit_09.png',
    ];
    dieImages = [
        'assets/img/hero/Death/Death_00.png',
        'assets/img/hero/Death/Death_01.png',
        'assets/img/hero/Death/Death_02.png',
        'assets/img/hero/Death/Death_03.png',
        'assets/img/hero/Death/Death_04.png',
        'assets/img/hero/Death/Death_05.png',
        'assets/img/hero/Death/Death_06.png',
        'assets/img/hero/Death/Death_07.png',
        'assets/img/hero/Death/Death_08.png',
        'assets/img/hero/Death/Death_09.png',
        'assets/img/hero/Death/Death_10.png',
        'assets/img/hero/Death/Death_11.png',
        'assets/img/hero/Death/Death_12.png',
        'assets/img/hero/Death/Death_13.png',
        'assets/img/hero/Death/Death_14.png',
        'assets/img/hero/Death/Death_15.png',
        'assets/img/hero/Death/Death_16.png',
        'assets/img/hero/Death/Death_17.png',
        'assets/img/hero/Death/Death_18.png',
        'assets/img/hero/Death/Death_19.png',
        'assets/img/hero/Death/Death_20.png',
        'assets/img/hero/Death/Death_21.png',
        'assets/img/hero/Death/Death_22.png',
        'assets/img/hero/Death/Death_23.png',
        'assets/img/hero/Death/Death_24.png',
        'assets/img/hero/Death/Death_25.png',
        'assets/img/hero/Death/Death_26.png',
        'assets/img/hero/Death/Death_27.png',
        'assets/img/hero/Death/Death_28.png',
        'assets/img/hero/Death/Death_29.png',
        'assets/img/hero/Death/Death_30.png',
        'assets/img/hero/Death/Death_31.png',
        'assets/img/hero/Death/Death_32.png',
        'assets/img/hero/Death/Death_33.png',
        'assets/img/hero/Death/Death_34.png',
        'assets/img/hero/Death/Death_35.png',
        'assets/img/hero/Death/Death_36.png',
        'assets/img/hero/Death/Death_37.png',
        'assets/img/hero/Death/Death_38.png',
        'assets/img/hero/Death/Death_39.png',
        'assets/img/hero/Death/Death_40.png',
        'assets/img/hero/Death/Death_41.png',
        'assets/img/hero/Death/Death_42.png',
        'assets/img/hero/Death/Death_43.png'
    ];

    attackImages = [
        'assets/img/hero/ShootFX1/Shoot FX 1_0.png',
        'assets/img/hero/ShootFX1/Shoot FX 1_1.png',
        'assets/img/hero/ShootFX1/Shoot FX 1_2.png',
        'assets/img/hero/ShootFX1/Shoot FX 1_3.png',
    ];
    hp = 100;
    offsetY = 0;
    speed = 15;
    soundWalking = new Audio('../assets/audio/step.wav');
    jumpDirection = 1;
    timeToNextShot = 0;
    standardImunityTime = 20;

    constructor() {
        super().loadImage(this.idleImages[0]);
        this.loadImagesInCache(this.walkImages);
        this.loadImagesInCache(this.idleImages);
        this.loadImagesInCache(this.jumpImages);
        this.loadImagesInCache(this.getHitImages);
        this.loadImagesInCache(this.dieImages);
        this.loadImagesInCache(this.attackImages);
        this.posX = -70;
        this.posY = 150;
        this.width = 650;
        this.height = 650;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.reduceDamageImmunityDuration();
            this.reduceTimeToNextShot();

            if (this.isDead()) {
                this.playDieAnimation();
            } else {
                if (this.isTakingDamage) {                  
                    this.playGetHitAnimation();
                }

                if (this.isAttacking) {
                    this.playAttackingAnimation();
                }

                if (this.timeToNextShot <= 10 && this.timeToNextShot > 0 && this.isAttacking) {
                    this.isAttacking = false;
                }

                if (this.world.keyboard.A && !this.isJumping() && !this.isTakingDamage && this.timeToNextShot == 0) {
                    this.isAttacking = true;
                    this.timeToNextShot = 20;
                }

                if (this.world.keyboard.SPACE && !this.isJumping()) {
                    this.initJump();
                }
                if (this.isJumping()) {
                    this.playJumpAnimation();
                }
                if (this.world.keyboard.RIGHT && this.posX < this.world.length) {
                    this.moveRight();
                    this.otherDirection = false;
                    this.world.laserbeam.faceRight(this.posX);
                    this.world.laserbeam.moveRight();
                    this.world.foregrounds.forEach(foreground => {
                        foreground.moveLeft();
                    })
                }

                if (this.world.keyboard.LEFT && this.posX > -72) {
                    this.moveLeft();
                    this.otherDirection = true;
                    this.world.laserbeam.moveLeft();
                    this.world.laserbeam.faceLeft(this.posX);
                    this.world.foregrounds.forEach(foreground => {
                        foreground.moveRight();
                    })
                }

                if (!this.isJumping() && this.world.keyboard.RIGHT || !this.isJumping() && this.world.keyboard.LEFT) {
                    this.playWalkingAnimation();
                }

                if (!this.world.keyboard.KEYPRESSED && !this.isJumping() && !this.isTakingDamage && !this.isAttacking) {
                    this.playIdleAnimation();
                }
            }
            this.setCameraOnHero();
        }, 1000 / 16);
    }

    reduceTimeToNextShot() {
        if (this.timeToNextShot > 0) {
            this.timeToNextShot--;
        }
    }

    setCameraOnHero() {
        this.world.cameraX = this.posX * -1;
    }

    initJump() {
        this.currentImg = 0;
        this.offsetY = -50;
    }

    playJumpAnimation() {
        this.offsetY = this.offsetY - this.jumpDirection * 50;

        let i = this.currentImg;
        let path = this.jumpImages[i];
        this.img = this.imageCache[path];
        this.currentImg = this.currentImg + this.jumpDirection;

        if (this.currentImg >= this.jumpImages.length - 1) {
            this.jumpDirection *= -1;
        }

        if (this.currentImg == -1) {
            this.currentImg = 0;
            this.jumpDirection = 1;
            this.offsetY = 0;
        }
    }

    isJumping() {
        return this.offsetY < 0;
    }

    trow() {

    }
}