class Drone extends Character {
    idleImages = [
        'assets/img/drone/MoveIdle/Moving_Idle_0.png',
        'assets/img/drone/MoveIdle/Moving_Idle_1.png',
        'assets/img/drone/MoveIdle/Moving_Idle_2.png',
        'assets/img/drone/MoveIdle/Moving_Idle_3.png',
        'assets/img/drone/MoveIdle/Moving_Idle_4.png',
        'assets/img/drone/MoveIdle/Moving_Idle_5.png',
        'assets/img/drone/MoveIdle/Moving_Idle_6.png'
    ]

    dieImages = [
        'assets/img/drone/Destroy/Destroy_00.png',
        'assets/img/drone/Destroy/Destroy_01.png',
        'assets/img/drone/Destroy/Destroy_02.png',
        'assets/img/drone/Destroy/Destroy_03.png',
        'assets/img/drone/Destroy/Destroy_04.png',
        'assets/img/drone/Destroy/Destroy_05.png',
        'assets/img/drone/Destroy/Destroy_06.png',
        'assets/img/drone/Destroy/Destroy_07.png',
        'assets/img/drone/Destroy/Destroy_08.png',
        'assets/img/drone/Destroy/Destroy_09.png',
        'assets/img/drone/Destroy/Destroy_10.png',
        'assets/img/drone/Destroy/Destroy_11.png',
        'assets/img/drone/Destroy/Destroy_12.png',
        'assets/img/drone/Destroy/Destroy_13.png',
        'assets/img/drone/Destroy/Destroy_14.png'
    ];

    getHitImages = [
        'assets/img/drone/GetHit/Get_Hit_00.png',
        'assets/img/drone/GetHit/Get_Hit_01.png',
        'assets/img/drone/GetHit/Get_Hit_02.png',
        'assets/img/drone/GetHit/Get_Hit_03.png',
        'assets/img/drone/GetHit/Get_Hit_04.png',
        'assets/img/drone/GetHit/Get_Hit_05.png',
        'assets/img/drone/GetHit/Get_Hit_06.png',
        'assets/img/drone/GetHit/Get_Hit_07.png',
        'assets/img/drone/GetHit/Get_Hit_08.png',
        'assets/img/drone/GetHit/Get_Hit_09.png'
    ];

    shootImages = [
        'assets/img/drone/Shoot/Shoot_00.png',
        'assets/img/drone/Shoot/Shoot_01.png',
        'assets/img/drone/Shoot/Shoot_02.png',
        'assets/img/drone/Shoot/Shoot_03.png',
        'assets/img/drone/Shoot/Shoot_04.png'
    ];

    getLaseredImages = [
        'assets/img/drone/GetElectric/Get_Electric_0.png',
        'assets/img/drone/GetElectric/Get_Electric_1.png',
        'assets/img/drone/GetElectric/Get_Electric_2.png'
    ];

    soundShooting = new Audio('assets/audio/flaunch.wav');
    soundTakeDamage = new Audio('assets/audio/drone_damage.wav');
    soundDie = new Audio('assets/audio/drone_die.wav')
    posY = 100;
    width = 650;
    height = 650;
    speed = 3;
    power = 10;
    hp = 15;
    standardImunityTime = 40;
    intervalBetweenShots = 50;
    timeToNextShot = 0;
    detectionRange = 700;


    constructor(posX) {
        super().loadImage(this.idleImages[0]);
        this.posX = posX;
        this.loadImagesInCache(this.idleImages);
        this.loadImagesInCache(this.dieImages);
        this.loadImagesInCache(this.getHitImages);
        this.loadImagesInCache(this.shootImages);
        this.loadImagesInCache(this.getLaseredImages);
        this.run()
        this.animate();
    }

    run() {
        setInterval(() => {
            this.reduceLaserHitDuration();
            this.reduceDamageImmunityDuration();
            this.reduceTimeToNextShot();

            if (this.hp <= 0 && (this.currentState != 'lasered' || this.currentState != 'hurting')) {
                this.currentState = 'dead';
                if (!this.dieSoundPlayed) {
                    this.soundDie.play();
                    this.dieSoundPlayed = true;
                }
            }

            if (this.currentState == 'lasered' && !this.isBeingLasered()){
                this.currentState = 'idle';
            }
            
        }, 1000 / 16);

    }

    animate() {
        setInterval(() => {
            if ((this.hasDetectedHero)) {
                this.lookAtHero()
            }

            if (this.currentState == 'dead') {
                this.playDieAnimation();
            }

            if (this.currentState == 'hurting') {
                this.playGetHitAnimation();
            }

            if (this.currentState == 'lasered') {
                this.playLaseredAnimation();
            }

            if (this.currentState == 'attacking') {
                this.playShootAnimation()
            }

            if (this.currentState == "idle") {
                this.playIdleAnimation();
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

    shootAtHeroIfDeteced() {
        if (this.hasDetectedHero && !this.isBeingLasered()) {
            if(this.timeToNextShot == 0){
                this.currentState = 'attacking';
                this.shootRocket();
                this.soundShooting.play();
            }
        }
    }

    shootRocket() {
        let rocket = new Rocket(this.posX);
        if (this.otherDirection) {
            rocket.posX = this.posX + this.width - 100;
            rocket.otherDirection = true;
        }
        this.world.projectiles.push(rocket);
        this.timeToNextShot = this.intervalBetweenShots;
    }

    playShootAnimation() {
        this.ensureAnimationStartsAtBeginning(this.shootImages);
        this.playAnimation(this.shootImages);
        if (this.currentImg % this.shootImages.length == this.shootImages.length - 1) {
            this.currentState = "idle"
        }
    }

    reduceTimeToNextShot() {
        if (this.timeToNextShot > 0) {
            this.timeToNextShot--;
        }
    }


}

