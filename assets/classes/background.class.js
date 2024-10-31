/**
 * Represents a background object in the game.
 * Extends the MovableObject class to inherit position and movement properties.
 * @extends MovableObject
 */
class Background extends MovableObject {
   posY = 0;
   width = 13019;
   height = 796;

   constructor(path, posX) {
       super().loadImage(path);
       this.posX = posX;
   }
}
