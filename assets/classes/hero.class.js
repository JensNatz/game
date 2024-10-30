/**
 * Represents a hero character in the game, extending the base Character class.
 * The Hero class manages animations, sounds, and actions such as walking, jumping, 
 * attacking, and dying.
 * 
 * @extends Character
 */
class Hero extends Character {
    /**
     * An array of image paths for the idle animation.
     * @type {string[]}
     */
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

    /**
     * An array of image paths for the walking animation.
     * @type {string[]}
     */
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

    /**
     * An array of image paths for the jumping animation.
     * @type {string[]}
     */
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

    /**
     * An array of image paths for the hit animation.
     * @type {string[]}
     */
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

    /**
     * An array of image paths for the dying animation.
     * @type {string[]}
     */
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

    /**
     * An array of image paths for the attack animation.
     * @type {string[]}
     */
    attackImages = [
        'assets/img/hero/ShootFX1/Shoot_FX_1_0.png',
        'assets/img/hero/ShootFX1/Shoot_FX_1_1.png',
        'assets/img/hero/ShootFX1/Shoot_FX_1_2.png',
        'assets/img/hero/ShootFX1/Shoot_FX_1_3.png',
    ];

     /**
     * An array of image paths for the throwing animation.
     * @type {string[]}
     */
    trowImages = [
        'assets/img/hero/Throw/Throw_bomb_00.png',
        'assets/img/hero/Throw/Throw_bomb_01.png',
        'assets/img/hero/Throw/Throw_bomb_02.png',
        'assets/img/hero/Throw/Throw_bomb_03.png',
        'assets/img/hero/Throw/Throw_bomb_04.png',
        'assets/img/hero/Throw/Throw_bomb_05.png',
        'assets/img/hero/Throw/Throw_bomb_06.png',
        'assets/img/hero/Throw/Throw_bomb_07.png',
        'assets/img/hero/Throw/Throw_bomb_08.png',
        'assets/img/hero/Throw/Throw_bomb_09.png',
        'assets/img/hero/Throw/Throw_bomb_10.png',
        'assets/img/hero/Throw/Throw_bomb_11.png',
        'assets/img/hero/Throw/Throw_bomb_12.png',
        'assets/img/hero/Throw/Throw_bomb_13.png',
        'assets/img/hero/Throw/Throw_bomb_14.png',
        'assets/img/hero/Throw/Throw_bomb_15.png',
        'assets/img/hero/Throw/Throw_bomb_16.png',
        'assets/img/hero/Throw/Throw_bomb_17.png',
        'assets/img/hero/Throw/Throw_bomb_18.png',
        'assets/img/hero/Throw/Throw_bomb_19.png'
    ];

    /**
     * An object containing audio clips for various hero actions.
     * @type {Object}
     * @property {Audio} walking - Sound for walking.
     * @property {Audio} laserbeam - Sound for laser beam attack.
     * @property {Audio} jumping - Sound for jumping.
     * @property {Audio} takeDamage - Sound for taking damage.
     * @property {Audio} die - Sound for dying.
     * @property {Audio} trow - Sound for throwing.
     */
    sounds = {
        walking: new Audio('assets/audio/step.wav'),
        laserbeam: new Audio('assets/audio/laserbeam.wav'),
        jumping: new Audio('assets/audio/hero_jump.wav'),
        takeDamage: new Audio('assets/audio/hero_pain.wav'),
        die: new Audio('assets/audio/hero_die.wav'),
        trow: new Audio('assets/audio/hero_trow.wav')
    }

    /**
     * The horizontal position of the hero.
     * @type {number}
     */
    posX = -70;

    /**
     * The vertical position of the hero.
     * @type {number}
     */
    posY = 150;

    /**
     * The width of the hero.
     * @type {number}
     */
    width = 650;

    /**
     * The height of the hero.
     * @type {number}
     */
    height = 650;

    /**
     * The vertical offset for jumping animations.
     * @type {number}
     */
    offsetY = 0;

    /**
     * The speed of the hero's movement.
     * @type {number}
     */
    speed = 15;

    /**
     * The health points of the hero.
     * @type {number}
     */
    hp = 100;

    /**
     * The direction of the jump (1 for up, -1 for down).
     * @type {number}
     */
    jumpDirection = 1;

    /**
     * The time until the next shot can be fired.
     * @type {number}
     */
    timeToNextShot = 0;

    /**
     * The standard immunity time after taking damage.
     * @type {number}
     */
    standardImunityTime = 20;

    /**
     * The number of bombs the hero currently has.
     * @type {number}
     */
    numberOfBombs = 0;

    /**
     * Constructs a new Hero instance. It sets up intervals for running and animating the object once all images are loaded.
     */
    constructor() {
        super().loadImage(this.idleImages[0]);

        this.loadingPromises = [
            this.loadImagesInCache(this.walkImages),
            this.loadImagesInCache(this.idleImages),
            this.loadImagesInCache(this.jumpImages),
            this.loadImagesInCache(this.getHitImages),
            this.loadImagesInCache(this.dieImages),
            this.loadImagesInCache(this.attackImages),
            this.loadImagesInCache(this.trowImages)
        ];

        Promise.all(this.loadingPromises).then(() => {
            this.setStoppableInterval(this.run.bind(this));
            this.setStoppableInterval(this.animate.bind(this));
        })
    }
    /**
     * Runs the Hero logic, including checking health and state transitions.
     */
    run() {
        this.reduceDamageImmunityDuration();
        this.reduceTimeToNextShot();

        if (this.hp <= 0) {
            this.currentState = 'dead';
        }

        if (this.currentState == 'walking' && !this.world.keyboard.KEYPRESSED) {
            this.currentState = 'idle';
        }

        if (this.currentState == 'attacking' && this.timeToNextShot <= 10) {
            this.currentState = 'idle';
            this.endSound(this.sounds.laserbeam);
        }

        if (this.world.keyboard.A && this.timeToNextShot == 0 && (this.currentState == 'idle' || this.currentState == 'walking')) {
            this.currentState = 'attacking'
            this.timeToNextShot = 20;
            if (!this.isMuted) {
                this.sounds.laserbeam.play();
            }
        }

        if (this.world.keyboard.W && this.numberOfBombs > 0 && this.currentState == 'idle') {
            this.currentState = 'trowing'
            this.trow();
            if (!this.isMuted) {
                this.sounds.trow.play();
            }
        }

        if (this.world.keyboard.LEFT || this.world.keyboard.RIGHT) {
            if (this.currentState == 'idle') {
                this.currentState = 'walking';
            }
        }

        if (this.world.keyboard.SPACE && (this.currentState == 'idle' || this.currentState == 'walking')) {
            this.currentState = 'jumping'
            if (!this.isMuted) {
                this.sounds.jumping.play();
            }
        }

        if (this.world.keyboard.RIGHT && this.posX < this.world.length && (this.currentState == 'jumping' || this.currentState == 'walking')) {
            this.moveRight();
            this.otherDirection = false;
            this.world.laserbeam.faceRight(this.posX);
            this.world.laserbeam.moveRight();
            this.world.foregrounds.forEach(foreground => {
                foreground.moveLeft();
            })
        }

        if (this.world.keyboard.LEFT && this.posX > -72 && (this.currentState == 'jumping' || this.currentState == 'walking')) {
            this.moveLeft();
            this.otherDirection = true;
            this.world.laserbeam.moveLeft();
            this.world.laserbeam.faceLeft(this.posX);
            this.world.foregrounds.forEach(foreground => {
                foreground.moveRight();
            })
        }

        this.setCameraOnHero();
    }

    /**
     * Animates the heros actions based on the current state.
     */
    animate() {
        if (this.currentState == "dead") {
            this.playDieAnimation();
            if (!this.dieSoundPlayed) {
                if (!this.isMuted) {
                    this.sounds.die.play();
                }
                this.dieSoundPlayed = true;
            }
        }

        if (this.currentState == "jumping") {
            this.playJumpAnimation();
        }

        if (this.currentState == "trowing") {
            this.playTrowAnimation();
        }

        if (this.currentState == "attacking") {
            this.playAttackingAnimation();
        }

        if (this.currentState == "hurting") {
            this.playGetHitAnimation();
        }

        if (this.currentState == "walking") {
            this.playWalkingAnimation();
            if (!this.isMuted) {
                this.sounds.walking.play();
            }
        }

        if (this.currentState == "idle") {
            this.playIdleAnimation();
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

     /**
     * Sets the camera 100px left to the heros position
     */
    setCameraOnHero() {
        if (this.posX > 100) {
            this.world.cameraX = (this.posX - 100) * -1;
        }
    }

    /**
     * Plays the trowing animation and returns to idle afterward.
     */
    playTrowAnimation() {
        this.ensureAnimationStartsAtBeginning(this.trowImages);
        if (this.currentImg % this.trowImages.length != this.trowImages.length - 1) {
            this.playAnimation(this.trowImages);
        } else {
            this.currentState = "idle";
        }
    }

    /**
     * Plays the jumping animation and returns to idle afterward.
     */
    playJumpAnimation() {
        this.ensureAnimationStartsAtBeginning(this.jumpImages);
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
            this.currentState = 'idle';
        }
    }

    /**
     * Creates a new bomb Object and pushes it into the worlds bombs array. Then reduces the number of bombs, carried by the hero, by -1
     */
    trow() {
        let trowingSpeed;
        if (this.otherDirection == false) {
            trowingSpeed = 20
        } else {
            trowingSpeed = -20
        }
        let newBomb = new Bomb(this.posX + this.width / 2, this.posY + this.height / 2, trowingSpeed)
        if (this.isMuted) {
            newBomb.isMuted = true;
        }
        this.world.bombs.push(newBomb);
        this.world.bombSymbols.pop();
        this.numberOfBombs--;
    }

    /**
     * Adds one bomb to the total number of bombs
     */
    addBombToInventory() {
        this.numberOfBombs++;
    }
    /**
     * Apply healthpack effect to heros hp, to a maximum of 100 hp. Plays the pickup sound, if not muted
     */
    applyHealthPack(healthpack) {
        this.hp = Math.min(this.hp + healthpack.hp, 100);
        if (!healthpack.isMuted) {
            healthpack.sounds.pickup.play();
        }
    }
}