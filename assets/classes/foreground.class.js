class Foreground extends MovableObject {
   width = 3255;
   height = 151;
   speed = 1.2;

   constructor(path, posX, posY){
    super().loadImage(path) 
    this.posX = posX;
    this.posY = posY; 
   }
}