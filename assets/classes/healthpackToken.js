/**
 * Represents a health pack token that can be picked up in the game.
 * @extends DrawableObject
 */
class HealthpackToken extends DrawableObject {
    /** @type {string} - The path to the health pack token image. */
    image = 'assets/img/healthpack/healthpackToken.png';
    
    /** @type {number} - The width of the health pack token. */
    width = 93;

    /** @type {number} - The height of the health pack token. */
    height = 100;

    /** @type {number} - The vertical position of the health pack token. */
    posY = 450;

    /** @type {number} - The amount of health restored when the token is picked up. */
    hp = 15;

    /** @type {{ pickup: Audio }} - The sounds associated with the health pack token. */
    sounds = {
        pickup: new Audio('assets/audio/pickup_healthpack.flac')
    }

    /**
     * Constructs a new HealthpackToken instance at the specified horizontal position.
     * 
     * @param {number} posX - The horizontal position of the health pack token.
     */
    constructor(posX) {
        super().loadImage(this.image);
        this.posX = posX;
    }
}
