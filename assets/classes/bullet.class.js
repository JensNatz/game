/**
 * Represents a bullet projectile in the game that moves in a specified direction.
 * Extends the MovableObject class to inherit position and movement properties.
 * @extends MovableObject
 */
class Bullet extends MovableObject {
    image = 'assets/img/projectile/yellow_bullet.png';
    width = 136;
    height = 23;
    power = 10;
    speed = 25;
    posY = 520;

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
