class Character extends MovableObject {
    hp;
    strength;

    idleImagesCache = {};
    walkingImagesCache = {};

    loadIdleImages(array) {
        array.forEach(path => {
            let img = new Image();
            img.src = path;
            this.idleImagesCache[path] = img;
        });
    }

    loadWalkingImages(array) {
        array.forEach(path => {
            let img = new Image();
            img.src = path;
            this.walkingImagesCache[path] = img;
        });
    }
    

    idle() {
        this.loadImage();
    };

    attack(){

    };

    takeDamage(){

    };

    die() {

    };
}