class Character extends MovableObject {
    world;
    hp;
    power;
    standardImunityTime = 0;
    currentDamageImmunityDuration = 0;
    walkImages;
    getHitImages;
    dieImages;
    attackImages;
    getLaseredImages;
    isTakingDamage = false;
    laserHitDuration = 0;
    isAttacking = false;
    
    playWalkingAnimation() {
        this.playAnimation(this.walkImages)      
    }

    playGetHitAnimation() {
        this.ensureAnimationStartsAtBeginning(this.getHitImages);    
        this.playAnimation(this.getHitImages)  
        if (this.currentImg % this.getHitImages.length == this.getHitImages.length-1){
            this.isTakingDamage = false;
        }
    }

    playIdleAnimation() {
        this.playAnimation(this.idleImages)        
    }

    playDieAnimation(){ 
        this.ensureAnimationStartsAtBeginning(this.dieImages);    
        if (this.currentImg % this.dieImages.length != this.dieImages.length-1){
            this.playAnimation(this.dieImages) 
        } 
    }

    playAttackingAnimation(){
        this.playAnimation(this.attackImages)  
    }

    playLaseredAnimation(){
        this.playAnimation(this.getLaseredImages)  
    }

    reduceDamageImmunityDuration(){
        if(this.currentDamageImmunityDuration > 0){
            this.currentDamageImmunityDuration--;
        }
    }

    reduceLaserHitDuration(){
        if(this.laserHitDuration > 0){
            this.laserHitDuration--;
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

    isBeingLasered(){
        return this.laserHitDuration > 0;
    }
}