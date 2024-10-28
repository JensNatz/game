/**
 * Represents a foreground object in the game, which can be moved and rendered.
 * @extends MovableObject
 */
class Foreground extends MovableObject {
   /**
    * Constructs a new Foreground instance with the specified properties.
    * 
    * @param {string} path - The path to the image to be used for this foreground object.
    * @param {number} posX - The horizontal position of the foreground object.
    * @param {number} posY - The vertical position of the foreground object.
    * @param {number} width - The width of the foreground object.
    * @param {number} height - The height of the foreground object.
    */
   constructor(path, posX, posY, width, height) {
       super().loadImage(path);
       this.posX = posX;
       this.posY = posY; 
       this.width = width;
       this.height = height;
   }
}
