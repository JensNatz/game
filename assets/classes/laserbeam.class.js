class Laserbeam extends MovableObject {
    power = 5;
    laserbeamImages = [
        'assets/img/laserbeam/skeleton-animation_0.png',
        'assets/img/laserbeam/skeleton-animation_1.png',
        'assets/img/laserbeam/skeleton-animation_2.png',
        'assets/img/laserbeam/skeleton-animation_3.png',
        'assets/img/laserbeam/skeleton-animation_4.png',
    ]
    laserbeamImagesCache = {};
    posX = 395;
    posY = 490;
    width = 521;
    height = 144;
    speed = 15;
    
    constructor() {
        super().loadImage(this.laserbeamImages[0]);
        this.loadImagesInCache(this.laserbeamImages, this.laserbeamImagesCache);
        this.animate();
    }

    playLaserbeamAnimation() {
        this.playAnimation(this.laserbeamImages, this.laserbeamImagesCache)
    }

    animate() {
        setInterval(() => {
            this.playLaserbeamAnimation();
        }, 1000/16); 
    } 

    faceRight(){
        this.otherDirection = false;
        //this.posX = this.posX + 450;  
    }

    faceLeft(){
        this.otherDirection = true;
        //this.posX = this.posX -335;        
    }
}