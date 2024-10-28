/**
 * Represents a laser beam object that can be animated and has a specific power and speed.
 * Extends the MovableObject class to inherit position and movement properties.
 */

class Laserbeam extends MovableObject {
    /**
     * The power of the laser beam, representing the amount of damage it inflicts
     * @type {number}
     */
    power = 5;

    /**
     * Array of image paths for the laser beam animation.
     * @type {string[]}
     */
    laserbeamImages = [
        'assets/img/laserbeam/skeleton-animation_0.png',
        'assets/img/laserbeam/skeleton-animation_1.png',
        'assets/img/laserbeam/skeleton-animation_2.png',
        'assets/img/laserbeam/skeleton-animation_3.png',
        'assets/img/laserbeam/skeleton-animation_4.png',
    ]
    /**
     * The horizontal position of the laser beam.
     * @type {number}
     */
    posX = 395;

    /**
     * The vertical position of the laser beam.
     * @type {number}
     */
    posY = 490;

    /**
     * The width of the laser beam.
     * @type {number}
     */
    width = 521;

    /**
     * The height of the laser beam.
     * @type {number}
     */
    height = 144;

    /**
     * The speed of the laser beam - must be the same speed as the heroes speed.
     * @type {number}
     */
    speed = 15;

    /**
     * Initializes the laser beam, loading the first image and setting up animation.
     */
    constructor() {
        super().loadImage(this.laserbeamImages[0]);
        this.loadImagesInCache(this.laserbeamImages);
        this.setStoppableInterval(this.animate.bind(this));
    }

    /**
     * Plays the laser beam animation.
     */
    playLaserbeamAnimation() {
        this.playAnimation(this.laserbeamImages)
    }

    /**
     * Animates the laser beam by calling the playLaserbeamAnimation method.
     */
    animate() {
        this.playLaserbeamAnimation();
    }
    /**
    * Adjusts the position of the laser beam to face right relative to the hero's position.
    * @param {number} heroPosX - The horizontal position of the hero.
    */
    faceRight(heroPosX) {
        if (this.otherDirection == true) {
            this.otherDirection = false;
            this.posX = heroPosX + 450;
        }
    }
    /**
     * Adjusts the position of the laser beam to face left relative to the hero's position.
     * @param {number} heroPosX - The horizontal position of the hero.
     */
    faceLeft(heroPosX) {
        if (this.otherDirection == false) {
            this.otherDirection = true;
            this.posX = heroPosX - 330;
        }
    }
}