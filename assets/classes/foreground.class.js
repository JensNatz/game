/**
 * Represents a foreground object in the game, which can be moved and rendered.
 * @extends MovableObject
 */
class Foreground extends MovableObject {
   
   constructor(path, posX, posY, width, height) {
       super().loadImage(path);
       this.posX = posX;
       this.posY = posY; 
       this.width = width;
       this.height = height;
   }
}
