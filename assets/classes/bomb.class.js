/**
 * Represents a bomb object in the game, which can fly and explode upon impact.
 * Extends the MovableObject class to inherit position and movement properties.
 * @extends MovableObject
 */
class Bomb extends MovableObject {
    /**
     * Array of image paths for the bomb explosion animation sequence.
     * @type {string[]}
     */
    explodeImages = [
        'assets/img/bomb/explosion/skeleton-Fx2_0.png',
        'assets/img/bomb/explosion/skeleton-Fx2_1.png',
        'assets/img/bomb/explosion/skeleton-Fx2_2.png',
        'assets/img/bomb/explosion/skeleton-Fx2_3.png',
        'assets/img/bomb/explosion/skeleton-Fx2_4.png',
        'assets/img/bomb/explosion/skeleton-Fx2_5.png',
        'assets/img/bomb/explosion/skeleton-Fx2_6.png',
        'assets/img/bomb/explosion/skeleton-Fx2_7.png',
        'assets/img/bomb/explosion/skeleton-Fx2_8.png',
        'assets/img/bomb/explosion/skeleton-Fx2_9.png',
        'assets/img/bomb/explosion/skeleton-Fx2_10.png',
        'assets/img/bomb/explosion/skeleton-Fx2_11.png',
        'assets/img/bomb/explosion/skeleton-Fx2_12.png',
        'assets/img/bomb/explosion/skeleton-Fx2_13.png',
        'assets/img/bomb/explosion/skeleton-Fx2_14.png',
        'assets/img/bomb/explosion/skeleton-Fx2_15.png',
        'assets/img/bomb/explosion/skeleton-Fx2_16.png',
        'assets/img/bomb/explosion/skeleton-Fx2_17.png'
    ];

    /**
     * Path to the default bomb image.
     * @type {string}
     */
    image = 'assets/img/bomb/bomb.png';

    /**
     * Audio files for the bomb sounds.
     * @type {{ explosion: Audio }}
     */
    sounds = {
        explosion: new Audio('assets/audio/explosion.wav')
    };

    /**
     * Width of the bomb in pixels.
     * @type {number}
     */
    width = 199;

    /**
     * Height of the bomb in pixels.
     * @type {number}
     */
    height = 185;

    /**
     * Damage power of the bomb.
     * @type {number}
     */
    power = 15;

    /**
     * Range of the bomb's impact.
     * @type {number}
     */
    range = 200;

    /**
     * Vertical speed of the bomb.
     * @type {number}
     */
    speedY = 50;

    /**
     * Indicates whether the bomb is currently exploding.
     * @type {boolean}
     * @default false
     */
    isExploding = false;

    /**
     * Indicates whether the bomb has completed its explosion.
     * @type {boolean}
     * @default false
     */
    isExploded = false;

    /**
     * Creates a new bomb object.
     * Loads the bomb image, initializes position, speed, and sets up animation.
     * @param {number} posX - The horizontal position of the bomb in pixels.
     * @param {number} posY - The vertical position of the bomb in pixels.
     * @param {number} speed - The horizontal speed of the bomb.
     */
    constructor(posX, posY, speed) {
        super().loadImage(this.image);
        this.loadImagesInCache(this.explodeImages);
        this.posX = posX;
        this.posY = posY;
        this.speed = speed;
        this.setStoppableInterval(this.animate.bind(this));
    }

    /**
     * Controls the animation sequence of the bomb.
     * If the bomb reaches a certain height or starts exploding, the appropriate
     * animation sequence or sound is triggered.
     */
    animate() {
        if (this.posY > 2000) {
            this.isExploded = true;
        }
        if (this.isExploding) {
            if (!this.isMuted) {
                this.sounds.explosion.play();
            }
            this.playExplodeAnimation();
        } else {
            this.fly();
        }
    }

    /**
     * Updates the position of the bomb to simulate flight.
     * Adjusts vertical speed to simulate the effect of gravity.
     */
    fly() {
        this.posX += this.speed;
        this.posY -= this.speedY;
        this.speedY -= 4;
    }

    /**
     * Initiates the explosion process and deals damage to the target.
     * @param {object} target - The target object that will take damage from the explosion.
     */
    explode(target) {
        if (!this.isExploding) {
            this.isExploding = true;
            target.takeDamage(this.power);
        }
    }

    /**
     * Plays the explosion animation, resetting the sequence if needed.
     * Sets the bomb's state to exploded once the animation is complete.
     */
    playExplodeAnimation() {
        this.ensureAnimationStartsAtBeginning(this.explodeImages);
        this.playAnimation(this.explodeImages);
        if (this.currentImg % this.explodeImages.length === this.explodeImages.length - 1) {
            this.isExploded = true;
            this.isExploding = false;
        }
    }
}
