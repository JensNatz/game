class DrawableObject {
    posX;
    posY;
    img;
    width;
    height;
    speed = 1;
    currentImg = 0;
    otherDirection = false;

    loadImage(src) {
        this.img = new Image();
        this.img.src = src;
    }

    loadImagesInCache(imageArray, cache){
        imageArray.forEach(path => {
            let img = new Image();
            img.src = path;
            cache[path] = img;
        });
    }

    moveRight() {
        this.posX = this.posX + this.speed;
    }

    moveLeft() {
        this.posX = this.posX - this.speed;
    }
}