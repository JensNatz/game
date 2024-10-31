/**
 * Represents a health pack token that can be picked up in the game.
 * @extends DrawableObject
 */
class HealthpackToken extends DrawableObject {
    image = 'assets/img/healthpack/healthpackToken.png';
    width = 93;
    height = 100;
    posY = 450;
    hp = 15;
    sounds = {
        pickup: new Audio('assets/audio/pickup_healthpack.flac')
    }

    constructor(posX) {
        super().loadImage(this.image);
        this.posX = posX;
    }
}
