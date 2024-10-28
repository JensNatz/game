/**
 * Represents a movable object in the game, inheriting from DrawableObject.
*/

class MovableObject extends DrawableObject {
    /**
     * The speed at which the object moves. Default is 1.
     * @type {number}
     */
    speed = 1;
    
    /**
     * Moves the object to the right by its speed.
     */
    moveRight() {
        this.posX = this.posX + this.speed;
    }
    
    /**
     * Moves the object to the left by its speed.
     */
    moveLeft() {
        this.posX = this.posX - this.speed;
    }
}