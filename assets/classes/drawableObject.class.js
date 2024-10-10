class DrawableObject {
    posX;
    posY;
    img;
    width;
    height;
    currentImg = 0;
    imageCache = {};
    otherDirection = false;

    loadImage(src) {
        this.img = new Image();
        this.img.src = src;
    }

    loadImagesInCache(imageArray){
        imageArray.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    playAnimation(imageArray) {
        let i = this.currentImg % imageArray.length;
        let path = imageArray[i];
        this.img = this.imageCache[path];
        this.currentImg++;
    }

    ensureAnimationStartsAtBeginning(imageArray){
        const assetsIndex = this.img.src.indexOf('assets/');
        const relevantPath = this.img.src.slice(assetsIndex); 
        if(!imageArray.includes(relevantPath)){
            this.currentImg = 0;            
        }
        console.log(relevantPath);
                 
    }
}