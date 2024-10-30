/**
 * Represents a drone character in the game, extending the Character class.
 * The drone can detect the hero, shoot projectiles, and play various animations.
 * @extends Character
 */
class Drone extends Character {
    /**
     * Array of images for the idle animation.
     * @type {string[]}
     */
    idleImages = [
        'assets/img/drone/MoveIdle/Moving_Idle_0.png',
        'assets/img/drone/MoveIdle/Moving_Idle_1.png',
        'assets/img/drone/MoveIdle/Moving_Idle_2.png',
        'assets/img/drone/MoveIdle/Moving_Idle_3.png',
        'assets/img/drone/MoveIdle/Moving_Idle_4.png',
        'assets/img/drone/MoveIdle/Moving_Idle_5.png',
        'assets/img/drone/MoveIdle/Moving_Idle_6.png'
    ];

    /**
     * Array of images for the dying animation.
     * @type {string[]}
     */
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

    /**
     * Array of images for the 'get hit' animation.
     * @type {string[]}
     */
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

    /**
     * Array of images for the shooting animation.
     * @type {string[]}
     */
    shootImages = [
        'assets/img/drone/Shoot/Shoot_00.png',
        'assets/img/drone/Shoot/Shoot_01.png',
        'assets/img/drone/Shoot/Shoot_02.png',
        'assets/img/drone/Shoot/Shoot_03.png',
        'assets/img/drone/Shoot/Shoot_04.png'
    ];

    /**
     * Array of images for the laser hit animation.
     * @type {string[]}
     */
    getLaseredImages = [
        'assets/img/drone/GetElectric/Get_Electric_0.png',
        'assets/img/drone/GetElectric/Get_Electric_1.png',
        'assets/img/drone/GetElectric/Get_Electric_2.png'
    ];

    /**
     * Object containing audio files for various actions.
     * @type {object}
     */
    sounds = {
        shooting: new Audio('assets/audio/flaunch.wav'),
        takeDamage: new Audio('assets/audio/drone_damage.wav'),
        die: new Audio('assets/audio/drone_die.wav'),
        detected: new Audio('assets/audio/drone_detected.wav')
    };

    /**
     * Vertical position of the drone.
     * @type {number}
     */
    posY = 100;

    /**
     * Width of the drone.
     * @type {number}
     */
    width = 650;

    /**
     * Height of the drone.
     * @type {number}
     */
    height = 650;

    /**
     * Movement speed of the drone.
     * @type {number}
     */
    speed = 3;

    /**
     * Attack power of the drone.
     * @type {number}
     */
    power = 10;

    /**
     * Health points of the drone.
     * @type {number}
     */
    hp = 45;

    /**
     * Standard immunity time after taking damage.
     * @type {number}
     */
    standardImunityTime = 40;

    /**
     * Time interval between shots.
     * @type {number}
     */
    intervalBetweenShots = 50;

    /**
     * Time until the next shot can be fired.
     * @type {number}
     */
    timeToNextShot = 0;

    /**
     * Detection range for the drone to spot the hero.
     * @type {number}
     */
    detectionRange = 800;

    /**
     * Indicates if the detection sound has been played.
     * @type {boolean}
     */
    soundDetectedPlayed = false;

    /**
     * Constructs a new Drone instance and initializes images and intervals.
     * It sets up intervals for running and animating the object once all images are loaded.
     * @param {number} posX - The horizontal position of the drone.
     */
    constructor(posX) {
        super().loadImage(this.idleImages[0]);
        this.posX = posX;

        this.loadingPromises = [
            this.loadImagesInCache(this.idleImages),
            this.loadImagesInCache(this.dieImages),
            this.loadImagesInCache(this.getHitImages),
            this.loadImagesInCache(this.shootImages),
            this.loadImagesInCache(this.getLaseredImages)
        ];

        Promise.all(this.loadingPromises).then(() => {
            this.setStoppableInterval(this.run.bind(this));
            this.setStoppableInterval(this.animate.bind(this));
        })
    }

    /**
     * Updates the drone's state, manages sound effects, and checks for death.
     */
    run() {
        this.reduceLaserHitDuration();
        this.reduceDamageImmunityDuration();
        this.reduceTimeToNextShot();

        if (this.hp <= 0 && (this.currentState !== 'lasered' || this.currentState !== 'hurting')) {
            this.currentState = 'dead';
            if (!this.dieSoundPlayed) {
                if (!this.isMuted) {
                    this.sounds.takeDamage.pause();
                    this.sounds.die.play();
                }
                this.dieSoundPlayed = true;
            }
        }

        if (this.hasDetectedHero && !this.soundDetectedPlayed) {
            if (!this.isMuted) {
                this.sounds.detected.play();
            }
            this.soundDetectedPlayed = true;
        }

        if (this.currentState === 'lasered' && !this.isBeingLasered()) {
            this.currentState = 'idle';
        }
    }

    /**
     * Animates the drone based on its current state.
     */
    animate() {
        if (this.hasDetectedHero) {
            this.lookAtHero();
        }

        if (this.currentState === 'dead') {
            this.playDieAnimation();
        }

        if (this.currentState === 'hurting') {
            this.playGetHitAnimation();
        }

        if (this.currentState === 'lasered') {
            this.playLaseredAnimation();
        }

        if (this.currentState === 'attacking') {
            this.playShootAnimation();
        }

        if (this.currentState === 'idle') {
            this.playIdleAnimation();
        }
    }

    /**
     * Adjusts the drone's orientation to face the hero.
     */
    lookAtHero() {
        if (this.posX + this.width / 2 > this.world.hero.posX + this.world.hero.width / 2) {
            this.otherDirection = false;
        } else {
            this.otherDirection = true;
        }
    }

    /**
     * Shoots at the hero if detected and the drone is not being lasered.
     */
    shootAtHeroIfDeteced() {
        if (this.hasDetectedHero && !this.isBeingLasered()) {
            if (this.timeToNextShot === 0) {
                this.currentState = 'attacking';
                this.shootRocket();
                if (!this.isMuted) {
                    this.sounds.shooting.play();
                }
            }
        }
    }

    /**
     * Creates and fires a rocket projectile.
     */
    shootRocket() {
        let rocket = new Rocket(this.posX);
        if (this.otherDirection) {
            rocket.posX = this.posX + this.width - 100;
            rocket.otherDirection = true;
        }
        if (this.isMuted) {
            rocket.isMuted = true;
        }
        this.world.projectiles.push(rocket);
        this.timeToNextShot = this.intervalBetweenShots;
    }

    /**
     * Plays the shooting animation and returns to idle afterward.
     */
    playShootAnimation() {
        this.ensureAnimationStartsAtBeginning(this.shootImages);
        this.playAnimation(this.shootImages);
        if (this.currentImg % this.shootImages.length === this.shootImages.length - 1) {
            this.currentState = 'idle';
        }
    }

    /**
     * Reduces the time until the next shot can be fired.
     */
    reduceTimeToNextShot() {
        if (this.timeToNextShot > 0) {
            this.timeToNextShot--;
        }
    }
}
