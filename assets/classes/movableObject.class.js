class MovableObject {
    posX;
    posY;
    img;
    width;
    height;
    speed = 1;
    currentImg = 0;

    loadImage(src) {
        this.img = new Image();
        this.img.src = src;
    }

    moveRight(){
            this.posX = this.posX + this.speed;   
    }

    moveLeft(){
            this.posX = this.posX - this.speed;   
    }
}