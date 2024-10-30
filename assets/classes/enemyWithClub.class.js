/**
 * Represents an enemy character equipped with a club, extending the Character class.
 * This enemy can idle, walk, attack, and respond to damage.
 * @extends Character
 */
class EnemyWithClub extends Character {
    /**
     * Array of images for the idle animation.
     * @type {string[]}
     */
    idleImages = [
        'assets/img/enemyWithClub/Idle/Idle_00.png',
        'assets/img/enemyWithClub/Idle/Idle_01.png',
        'assets/img/enemyWithClub/Idle/Idle_02.png',
        'assets/img/enemyWithClub/Idle/Idle_03.png',
        'assets/img/enemyWithClub/Idle/Idle_04.png',
        'assets/img/enemyWithClub/Idle/Idle_05.png',
        'assets/img/enemyWithClub/Idle/Idle_06.png',
        'assets/img/enemyWithClub/Idle/Idle_07.png',
        'assets/img/enemyWithClub/Idle/Idle_08.png',
        'assets/img/enemyWithClub/Idle/Idle_09.png',
        'assets/img/enemyWithClub/Idle/Idle_10.png',
        'assets/img/enemyWithClub/Idle/Idle_11.png',
        'assets/img/enemyWithClub/Idle/Idle_12.png',
        'assets/img/enemyWithClub/Idle/Idle_13.png'
    ];

    /**
     * Array of images for the walking animation.
     * @type {string[]}
     */
    walkImages = [
        'assets/img/enemyWithClub/Walk/Walk_00.png',
        'assets/img/enemyWithClub/Walk/Walk_01.png',
        'assets/img/enemyWithClub/Walk/Walk_02.png',
        'assets/img/enemyWithClub/Walk/Walk_03.png',
        'assets/img/enemyWithClub/Walk/Walk_04.png',
        'assets/img/enemyWithClub/Walk/Walk_05.png',
        'assets/img/enemyWithClub/Walk/Walk_06.png',
        'assets/img/enemyWithClub/Walk/Walk_07.png',
        'assets/img/enemyWithClub/Walk/Walk_08.png',
        'assets/img/enemyWithClub/Walk/Walk_09.png',
        'assets/img/enemyWithClub/Walk/Walk_10.png',
        'assets/img/enemyWithClub/Walk/Walk_11.png',
        'assets/img/enemyWithClub/Walk/Walk_12.png',
        'assets/img/enemyWithClub/Walk/Walk_13.png'
    ];

    /**
     * Array of images for the attack animation.
     * @type {string[]}
     */
    attackImages = [
        'assets/img/enemyWithClub/Hit/Hit_00.png',
        'assets/img/enemyWithClub/Hit/Hit_01.png',
        'assets/img/enemyWithClub/Hit/Hit_02.png',
        'assets/img/enemyWithClub/Hit/Hit_03.png',
        'assets/img/enemyWithClub/Hit/Hit_04.png',
        'assets/img/enemyWithClub/Hit/Hit_05.png',
        'assets/img/enemyWithClub/Hit/Hit_06.png',
        'assets/img/enemyWithClub/Hit/Hit_07.png',
        'assets/img/enemyWithClub/Hit/Hit_08.png',
        'assets/img/enemyWithClub/Hit/Hit_09.png',
        'assets/img/enemyWithClub/Hit/Hit_10.png',
        'assets/img/enemyWithClub/Hit/Hit_11.png',
        'assets/img/enemyWithClub/Hit/Hit_12.png',
        'assets/img/enemyWithClub/Hit/Hit_13.png'
    ];

    /**
     * Array of images for the dying animation.
     * @type {string[]}
     */
    dieImages = [
        'assets/img/enemyWithClub/Death/Death_00.png',
        'assets/img/enemyWithClub/Death/Death_01.png',
        'assets/img/enemyWithClub/Death/Death_02.png',
        'assets/img/enemyWithClub/Death/Death_03.png',
        'assets/img/enemyWithClub/Death/Death_04.png',
        'assets/img/enemyWithClub/Death/Death_05.png',
        'assets/img/enemyWithClub/Death/Death_06.png',
        'assets/img/enemyWithClub/Death/Death_07.png',
        'assets/img/enemyWithClub/Death/Death_08.png',
        'assets/img/enemyWithClub/Death/Death_09.png',
        'assets/img/enemyWithClub/Death/Death_10.png',
        'assets/img/enemyWithClub/Death/Death_11.png',
        'assets/img/enemyWithClub/Death/Death_12.png',
        'assets/img/enemyWithClub/Death/Death_13.png',
        'assets/img/enemyWithClub/Death/Death_14.png',
        'assets/img/enemyWithClub/Death/Death_15.png',
        'assets/img/enemyWithClub/Death/Death_16.png',
        'assets/img/enemyWithClub/Death/Death_17.png',
        'assets/img/enemyWithClub/Death/Death_18.png',
        'assets/img/enemyWithClub/Death/Death_19.png',
        'assets/img/enemyWithClub/Death/Death_20.png',
        'assets/img/enemyWithClub/Death/Death_21.png',
        'assets/img/enemyWithClub/Death/Death_22.png',
        'assets/img/enemyWithClub/Death/Death_23.png'
    ];

    /**
     * Array of images for the hit animation.
     * @type {string[]}
     */
    getHitImages = [
        'assets/img/enemyWithClub/GetHit/Get_Hit_00.png',
        'assets/img/enemyWithClub/GetHit/Get_Hit_01.png',
        'assets/img/enemyWithClub/GetHit/Get_Hit_02.png',
        'assets/img/enemyWithClub/GetHit/Get_Hit_03.png',
        'assets/img/enemyWithClub/GetHit/Get_Hit_04.png',
        'assets/img/enemyWithClub/GetHit/Get_Hit_05.png',
        'assets/img/enemyWithClub/GetHit/Get_Hit_06.png',
        'assets/img/enemyWithClub/GetHit/Get_Hit_07.png',
        'assets/img/enemyWithClub/GetHit/Get_Hit_08.png',
        'assets/img/enemyWithClub/GetHit/Get_Hit_09.png'
    ];

    /**
     * Array of images for the laser hit animation.
     * @type {string[]}
     */
    getLaseredImages = [
        'assets/img/enemyWithClub/GetElectric/Get_Electric_0.png',
        'assets/img/enemyWithClub/GetElectric/Get_Electric_1.png',
        'assets/img/enemyWithClub/GetElectric/Get_Electric_2.png'
    ];

    /**
     * Object containing audio files for various actions.
     * @type {object}
     */
    sounds = {
        attacking: new Audio('assets/audio/hitWithClub.flac'),
        takeDamage: new Audio('assets/audio/pain2.wav'),
        die: new Audio('assets/audio/death2.wav')
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
    speed = 6;

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
     * Detection range for the enemy to spot the hero.
     * @type {number}
     */
    detectionRange = 800;

    /**
     * Indicates whether the enemy has detected the hero.
     * @type {boolean}
     */
    hasDetectedHero = false;

    /**
     * Distance within which the enemy will attack the hero.
     * @type {number}
     */
    attackingDistance = 200;

    /**
     * Constructs a new EnemyWithClub instance and initializes images and intervals.
     * It sets up intervals for running and animating the object once all images are loaded.
     * @param {number} posX - The horizontal position of the enemy.
     */
    constructor(posX) {
        super().loadImage(this.walkImages[0]);
        this.posX = posX;

        this.loadingPromises = [
            this.loadImagesInCache(this.idleImages),
            this.loadImagesInCache(this.walkImages),
            this.loadImagesInCache(this.dieImages),
            this.loadImagesInCache(this.attackImages),
            this.loadImagesInCache(this.getHitImages),
            this.loadImagesInCache(this.getLaseredImages)
        ];

        Promise.all(this.loadingPromises).then(() => {
            this.setStoppableInterval(this.run.bind(this));
            this.setStoppableInterval(this.animate.bind(this));
        })
    }

    /**
     * Runs the enemy logic, including checking health and state transitions.
     */
    run() {
        this.reduceLaserHitDuration();
        this.reduceDamageImmunityDuration();

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

        if (this.currentState == 'walking') {
            this.playWalkingAnimation();
            this.moveTowardsHero();
        }

        if (this.currentState == 'hurting') {
            this.playGetHitAnimation();
        }

        if (this.currentState == 'lasered') {
            this.playLaseredAnimation();
        }

        if (this.currentState == 'attacking') {
            this.playAttackingAnimation();
        }

        if (this.currentState == "idle") {
            this.playIdleAnimation();
        }
    }

    /**
     * Moves the enemy towards the hero based on their positions.
     */
    moveTowardsHero() {
        this.currentState = 'walking';
        if (this.posX + this.width / 2 > this.world.hero.posX + this.world.hero.width / 2) {
            this.moveLeft();
            this.otherDirection = false;
        } else {
            this.moveRight();
            this.otherDirection = true;
        }
    }

    /**
     * Acts based on the distance to the hero.
     * @param {number} distanceToHero - The distance to the hero.
     * @param {Hero} hero - The hero object.
     */
    actBasedOnDistance(distanceToHero, hero) {
        if (this.hasDetectedHero && !this.isBeingLasered()) {
            if (distanceToHero < this.attackingDistance) {
                this.attackHero(hero);
            } else {
                this.moveTowardsHero();
            }
        }
    }

    /**
     * Attacks the hero if in range and capable of doing so.
     * @param {Hero} hero - The hero object to be attacked.
     * @returns {void}
     */
    attackHero(hero) {
        this.currentState = 'attacking';
        if (hero.isVulnerable()) {
            hero.takeDamage(this.power);
        }
        if (!this.isMuted) {
            this.sounds.attacking.play();
        }
    }
}
