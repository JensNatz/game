/**
 * Represents a bomb symbol displayed in the game UI.
 * Extends the DrawableObject class to inherit properties for rendering.
 * @extends DrawableObject
 */
class BombSymbol extends DrawableObject {
    /**
     * Path to the bomb symbol image.
     * @type {string}
     */
    image = 'assets/img/bomb/bombSymbol.png';

    /**
     * Width of the bomb symbol in pixels.
     * @type {number}
     */
    width = 50;

    /**
     * Height of the bomb symbol in pixels.
     * @type {number}
     */
    height = 57;

    /**
     * Vertical position (Y-axis) of the bomb symbol in pixels.
     * @type {number}
     */
    posY = 110;

    /**
     * Horizontal position (X-axis) of the bomb symbol in pixels.
     * @type {number}
     */
    posX = 180;

    /**
     * Creates a new bomb symbol and applies an additional offset to its horizontal position.
     * Loads the bomb symbol image and sets the X position based on the given offset.
     * @param {number} offsetX - The horizontal offset to adjust the position of the bomb symbol.
     */
    constructor(offsetX) {
        super().loadImage(this.image);
        this.posX = this.posX + offsetX;
    }
}
