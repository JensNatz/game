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
        setInterval(() => {
            this.posX = this.posX + this.speed;   
        }, 1000/16); 
    }

    moveLeft(){
        setInterval(() => {
            this.posX = this.posX - this.speed;   
        }, 1000/16); 
    }
}