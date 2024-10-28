/**
 * Represents a bomb token that can be collected in the game.
 * Extends the DrawableObject class to inherit properties for rendering.
 * @extends DrawableObject
 */
class BombToken extends DrawableObject {
    /**
     * Path to the bomb token image.
     * @type {string}
     */
    image = 'assets/img/bomb/bombToken.png';

    /**
     * Width of the bomb token in pixels.
     * @type {number}
     */
    width = 93;

    /**
     * Height of the bomb token in pixels.
     * @type {number}
     */
    height = 106;

    /**
     * Vertical position (Y-axis) of the bomb token in pixels.
     * @type {number}
     */
    posY = 450;

    /**
     * Sound effects for the bomb token.
     * @type {{ pickup: Audio }}
     */
    sounds = {
        pickup: new Audio('assets/audio/pickup_bomb.wav')
    };

    /**
     * Creates a new bomb token and sets its horizontal position.
     * Loads the bomb token image and initializes the X position.
     * @param {number} posX - The horizontal position of the bomb token in pixels.
     */
    constructor(posX) {
        super().loadImage(this.image);
        this.posX = posX;
    }
}
