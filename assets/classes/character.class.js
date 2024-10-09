class Character extends MovableObject {
    world;
    hp;
    power;
    standardImunityTime = 0;
    currentDamageImmunityDuration = 0;
    idleImagesCache = {};
    walkImages;
    walkingImagesCache = {};
    getHitImages;
    getHitImagesCache = {};
    dieImages;
    dieImagesCache = {};
    attackImages;
    attackImagesCache = {};
    getLaseredImages;
    getLaseredImagesCache = {};
    isTakingDamage = false;
    isLasered = false;
    isAttacking = false;

    
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

    playAttackingAnimation(){
        this.playAnimation(this.attackImages, this.attackImagesCache)  
    }

    playLaseredAnimation(){
        this.playAnimation(this.getLaseredImages, this.getLaseredImagesCache)  
    }

    reduceDamageImmunityDuration(){
        if(this.currentDamageImmunityDuration > 0){
            this.currentDamageImmunityDuration--;
        }
    }

    attack() {

    };

    takeDamage(power) {
        this.hp = this.hp - power;
    };

    isDead(){
        return this.hp <= 0;
    }

    setImmunityToDamageTimer(){
        this.currentDamageImmunityDuration = this.standardImunityTime;
    }

    isVulnerable(){
        return this.currentDamageImmunityDuration == 0;
    }
}