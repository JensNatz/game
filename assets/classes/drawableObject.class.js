class DrawableObject {
    posX;
    posY;
    img;
    width;
    height;
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
}