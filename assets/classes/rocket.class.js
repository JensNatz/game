/**
 * Represents a rocket that moves and can explode upon impact.
 * Extends the MovableObject class to inherit movement and positioning properties.
 */
class Rocket extends MovableObject {
   /**
   * Array of explosion images for the rocket.
   * @type {string[]}
   */
    explodeImages = [
        'assets/img/rocket/explosion/Rocket_Explosion_0.png',
        'assets/img/rocket/explosion/Rocket_Explosion_1.png',
        'assets/img/rocket/explosion/Rocket_Explosion_2.png',
        'assets/img/rocket/explosion/Rocket_Explosion_3.png',
        'assets/img/rocket/explosion/Rocket_Explosion_4.png',
        'assets/img/rocket/explosion/Rocket_Explosion_5.png',
        'assets/img/rocket/explosion/Rocket_Explosion_6.png',
        'assets/img/rocket/explosion/Rocket_Explosion_7.png',
        'assets/img/rocket/explosion/Rocket_Explosion_8.png',
        'assets/img/rocket/explosion/Rocket_Explosion_9.png'
    ];

    /**
     * The image representing the rocket.
     * @type {string}
     */
    image = 'assets/img/rocket/rocket.png';

    /**
     * The width of the rocket.
     * @type {number}
     */
    width = 242;

    /**
     * The height of the rocket.
     * @type {number}
     */
    height = 134;

    /**
     * The power of the rocket's explosion.
     * @type {number}
     */
    power = 20;

    /**
     * The speed of the rocket.
     * @type {number}
     */
    speed = 15;

    /**
     * The vertical position of the rocket.
     * @type {number}
     */
    posY = 480;

    /**
     * Sound effects associated with the rocket.
     * @type {Object}
     */
    sounds = {
        explosion: new Audio('assets/audio/explosion.wav')
    }

    /**
     * Indicates if the rocket is currently exploding.
     * @type {boolean}
     */
    isExploding = false;

    /**
     * Indicates if the rocket has exploded completely.
     * @type {boolean}
     */
    isExploded = false;

    /**
     * Constructs a new Rocket instance at a specified horizontal position. 
     * It sets up intervals for running and animating the object once all images are loaded.
     * @param {number} posX - The initial horizontal position of the rocket.
     */
    constructor(posX) {
        super().loadImage(this.image);
        this.posX = posX;
        
        this.loadingPromises = [
            this.loadImagesInCache(this.explodeImages)
        ];

        this.setStoppableInterval(this.animate.bind(this));
    }

    /**
     * Animates the rocket's movement or explosion based on its state.
     */
    animate() {
        if (this.isExploding) {
            if (!this.isMuted) {
                this.sounds.explosion.play();
            }
            this.playExplodeAnimation()
        } else {
            if (this.otherDirection) {
                this.moveRight()
            } else {
                this.moveLeft()
            }
        }
    }

    /**
     * Initiates the explosion of the rocket and applies damage to a target.
     * @param {Object} target - The target object to take damage from the rocket's explosion.
     */
    explode(target) {
        if (this.isExploding == false) {
            this.isExploding = true;
            target.takeDamage(this.power);
        }
    }

    /**
     * Plays the explosion animation of the rocket.
     */
    playExplodeAnimation() {
        this.ensureAnimationStartsAtBeginning(this.explodeImages);
        this.playAnimation(this.explodeImages)
        if (this.currentImg % this.explodeImages.length == this.explodeImages.length - 1) {
            this.isExploded = true;
            this.isExploding = false;
        }
    }
}