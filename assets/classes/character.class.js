class Character extends MovableObject {
    world;
    hp;
    power;
    idleImagesCache = {};
    walkImages;
    walkingImagesCache = {};
    getHitImages;
    getHitImagesCache = {};
    dieImages;
    dieImagesCache = {};
    isTakingDamage = false;

    
    playWalkingAnimation() {
        this.playAnimation(this.walkImages, this.walkingImagesCache)      
    }

    playGetHitAnimation() {
        this.playAnimation(this.getHitImages, this.getHitImagesCache)  
        if (this.currentImg % this.getHitImages.length == this.getHitImages.length-1){
            this.isTakingDamage = false;
        }
    }

    playIdleAnimation() {
        this.playAnimation(this.idleImages, this.idleImagesCache)        
    }

    playDieAnimation(){
        this.playAnimation(this.dieImages, this.dieImagesCache)   
    }

    playAnimation(imageArray, cache) {
        let i = this.currentImg % imageArray.length;
        let path = imageArray[i];
        this.img = cache[path];
        this.currentImg++;
    }


    attack() {

    };

    takeDamage(power) {
        this.hp = this.hp - power;
    };

    isDead(){
        return this.hp <= 0;
    }
}