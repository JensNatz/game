/**
 * Represents a bomb symbol displayed in the game UI.
 * Extends the DrawableObject class to inherit properties for rendering.
 * @extends DrawableObject
 */
class BombSymbol extends DrawableObject {
    image = 'assets/img/bomb/bombSymbol.png';
    width = 50;
    height = 57;
    posY = 110;
    posX = 180;
    constructor(offsetX) {
        super().loadImage(this.image);
        this.posX = this.posX + offsetX;
    }
}
