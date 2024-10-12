class Laserbeam extends MovableObject {
    power = 5;
    laserbeamImages = [
        'assets/img/laserbeam/skeleton-animation_0.png',
        'assets/img/laserbeam/skeleton-animation_1.png',
        'assets/img/laserbeam/skeleton-animation_2.png',
        'assets/img/laserbeam/skeleton-animation_3.png',
        'assets/img/laserbeam/skeleton-animation_4.png',
    ]
    posX = 395;
    posY = 490;
    width = 521;
    height = 144;
    speed = 15;
    
    constructor() {
        super().loadImage(this.laserbeamImages[0]);
        this.loadImagesInCache(this.laserbeamImages);
        this.animate();
    }

    playLaserbeamAnimation() {
        this.playAnimation(this.laserbeamImages)
    }

    animate() {
        setInterval(() => {
            this.playLaserbeamAnimation();
        }, 1000/16); 
    } 

    faceRight(heroPosX){
        if(this.otherDirection == true){
            this.otherDirection = false;
            this.posX = heroPosX + 450;  
        }       
    }

    faceLeft(heroPosX){
        if(this.otherDirection == false){
            this.otherDirection = true;
            this.posX = heroPosX - 330;    
        }      
    }
}