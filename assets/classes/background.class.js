/**
 * Represents a background object in the game.
 * Extends the MovableObject class to inherit position and movement properties.
 * @extends MovableObject
 */
class Background extends MovableObject {
   /**
    * The vertical position (Y-axis) of the background in pixels.
    * @type {number}
    */
   posY = 0;

   /**
    * The width of the background image in pixels.
    * @type {number}
    */
   width = 13019;

   /**
    * The height of the background image in pixels.
    * @type {number}
    */
   height = 796;

   /**
    * Creates an instance of a background.
    * Loads the background image and sets the horizontal position (X-axis).
    * @param {string} path - The file path to the background image.
    * @param {number} posX - The horizontal position of the background in pixels.
    */
   constructor(path, posX) {
       super().loadImage(path);
       this.posX = posX;
   }
}
