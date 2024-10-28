/**
 * Represents a bullet projectile in the game that moves in a specified direction.
 * Extends the MovableObject class to inherit position and movement properties.
 * @extends MovableObject
 */
class Bullet extends MovableObject {
    /**
     * Path to the bullet image.
     * @type {string}
     */
    image = 'assets/img/projectile/yellow_bullet.png';

    /**
     * Width of the bullet in pixels.
     * @type {number}
     */
    width = 136;

    /**
     * Height of the bullet in pixels.
     * @type {number}
     */
    height = 23;

    /**
     * Damage power of the bullet.
     * @type {number}
     */
    power = 10;

    /**
     * Speed of the bullet in pixels per frame.
     * @type {number}
     */
    speed = 30;

    /**
     * Vertical position (Y-axis) of the bullet in pixels.
     * @type {number}
     */
    posY = 520;

    /**
     * Creates a new bullet and sets its horizontal position.
     * Loads the bullet image, initializes the X position, and starts the animation.
     * @param {number} posX - The initial horizontal position of the bullet in pixels.
     */
    constructor(posX) {
        super().loadImage(this.image);
        this.posX = posX;
        this.setStoppableInterval(this.animate.bind(this));
    }

    /**
     * Controls the bullet's movement based on its direction.
     * Moves the bullet either left or right depending on the `otherDirection` property.
     */
    animate() {
        if (this.otherDirection) {
            this.moveRight();
        } else {
            this.moveLeft();
        }
    }
}
