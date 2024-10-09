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

    playAnimation(imageArray, cache) {
        let i = this.currentImg % imageArray.length;
        let path = imageArray[i];
        this.img = cache[path];
        this.currentImg++;
    }
}