class Background extends MovableObject {
   posY = 0;
   width = 3257;
   height = 799; 

   constructor(path, posX){
      super().loadImage(path) 
      this.posX = posX;
     }
}