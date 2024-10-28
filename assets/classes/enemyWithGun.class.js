/**
 * Represents an enemy character equipped with a gun, extending the Character class.
 * This enemy can idle, walk, shoot, and respond to damage.
 * @extends Character
 */
class EnemyWithGun extends Character {
    /**
     * Array of images for the idle animation.
     * @type {string[]}
     */
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
    ];

    /**
     * Array of images for the walking animation.
     * @type {string[]}
     */
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

    /**
     * Array of images for the dying animation.
     * @type {string[]}
     */
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

    /**
     * Array of images for the hit animation.
     * @type {string[]}
     */
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

    /**
     * Array of images for the shooting animation.
     * @type {string[]}
     */
    shootImages = [
        'assets/img/enemyWithGun/Shoot/Shoot_00.png',
        'assets/img/enemyWithGun/Shoot/Shoot_01.png',
        'assets/img/enemyWithGun/Shoot/Shoot_02.png',
        'assets/img/enemyWithGun/Shoot/Shoot_03.png',
        'assets/img/enemyWithGun/Shoot/Shoot_04.png',
    ];

    /**
     * Array of images for the laser hit animation.
     * @type {string[]}
     */
    getLaseredImages = [
        'assets/img/enemyWithGun/GetElectric/Get_Electric_0.png',
        'assets/img/enemyWithGun/GetElectric/Get_Electric_1.png',
        'assets/img/enemyWithGun/GetElectric/Get_Electric_2.png',
    ];

    /**
     * Object containing audio files for various actions.
     * @type {object}
     */
    sounds = {
        shooting: new Audio('assets/audio/shoot.wav'),
        takeDamage: new Audio('assets/audio/pain1.wav'),
        die: new Audio('assets/audio/death1.wav')
    };

    /**
     * Vertical position of the enemy.
     * @type {number}
     */
    posY = 150;

    /**
     * Width of the enemy.
     * @type {number}
     */
    width = 650;

    /**
     * Height of the enemy.
     * @type {number}
     */
    height = 650;

    /**
     * Movement speed of the enemy.
     * @type {number}
     */
    speed = 3;

    /**
     * Attack power of the enemy.
     * @type {number}
     */
    power = 10;

    /**
     * Health points of the enemy.
     * @type {number}
     */
    hp = 10;

    /**
     * Standard immunity time after taking damage.
     * @type {number}
     */
    standardImunityTime = 20;

    /**
     * Interval between shots in frames.
     * @type {number}
     */
    intervalBetweenShots = 30;

    /**
     * Time remaining until the next shot can be fired.
     * @type {number}
     */
    timeToNextShot = 0;

    /**
     * Detection range for the enemy to spot the hero.
     * @type {number}
     */
    detectionRange = 800;

    /**
     * Constructs a new EnemyWithGun instance and initializes images and intervals.
     * @param {number} posX - The horizontal position of the enemy.
     */
    constructor(posX) {
        super().loadImage(this.walkImages[0]);
        this.posX = posX;
        this.loadImagesInCache(this.idleImages);
        this.loadImagesInCache(this.walkImages);
        this.loadImagesInCache(this.dieImages);
        this.loadImagesInCache(this.getHitImages);
        this.loadImagesInCache(this.shootImages);
        this.loadImagesInCache(this.getLaseredImages);
        this.setStoppableInterval(this.run.bind(this));
        this.setStoppableInterval(this.animate.bind(this));
    }

    /**
     * Runs the enemy logic, including checking health and state transitions.
     */
    run() {
        this.reduceLaserHitDuration();
        this.reduceDamageImmunityDuration();
        this.reduceTimeToNextShot();

        if (this.hp <= 0 && (this.currentState != 'lasered' || this.currentState != 'hurting')) {
            this.currentState = 'dead';
            if (!this.dieSoundPlayed) {
                if (!this.isMuted) {
                    this.sounds.die.play();
                }
                this.dieSoundPlayed = true;
            }
        }

        if (this.currentState == 'lasered' && !this.isBeingLasered()) {
            this.currentState = 'idle';
        }
    }

    /**
     * Animates the enemy's actions based on the current state.
     */
    animate() {
        if (this.currentState == 'dead') {
            this.playDieAnimation();
        }

        if (this.hasDetectedHero && this.currentState != 'dead') {
            this.lookAtHero();
        }

        if (this.currentState == 'hurting') {
            this.playGetHitAnimation();
        }

        if (this.currentState == 'lasered') {
            this.playLaseredAnimation();
        }

        if (this.currentState == 'attacking') {
            this.playShootAnimation();
        }

        if (this.currentState == "idle") {
            this.playIdleAnimation();
        }
    }

    /**
     * Adjusts the enemy's direction to face the hero.
     */
    lookAtHero() {
        if (this.posX + this.width / 2 > this.world.hero.posX + this.world.hero.width / 2) {
            this.otherDirection = false;
        } else {
            this.otherDirection = true;
        }
    }

    /**
     * Attempts to shoot at the hero if detected and not currently being laser hit.
     */
    shootAtHeroIfDeteced() {
        if (this.hasDetectedHero && !this.isBeingLasered()) {
            if (this.timeToNextShot == 0) {
                this.currentState = 'attacking';
                this.shootBullet();
                if (!this.isMuted) {
                    this.sounds.shooting.play();
                }
            }
        }
    }

    /**
     * Creates and launches a bullet towards the hero.
     */
    shootBullet() {
        let bullet = new Bullet(this.posX);
        if (this.otherDirection) {
            bullet.posX = this.posX + this.width - 100;
            bullet.otherDirection = true;
        }
        this.world.projectiles.push(bullet);
        this.timeToNextShot = this.intervalBetweenShots;
    }

    /**
     * Plays the shooting animation and transitions to idle state after completion.
     */
    playShootAnimation() {
        this.ensureAnimationStartsAtBeginning(this.shootImages);
        this.playAnimation(this.shootImages);
        if (this.currentImg % this.shootImages.length == this.shootImages.length - 1) {
            this.currentState = "idle";
        }
    }

    /**
     * Reduces the time remaining until the next shot can be fired.
     */
    reduceTimeToNextShot() {
        if (this.timeToNextShot > 0) {
            this.timeToNextShot--;
        }
    }
}
