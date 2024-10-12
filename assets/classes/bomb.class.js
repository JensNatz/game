class Bomb extends MovableObject {
    explodeImages = [
        'assets/img/bomb/explosion/skeleton-Fx2_0.png',
        'assets/img/bomb/explosion/skeleton-Fx2_1.png',
        'assets/img/bomb/explosion/skeleton-Fx2_2.png',
        'assets/img/bomb/explosion/skeleton-Fx2_3.png',
        'assets/img/bomb/explosion/skeleton-Fx2_4.png',
        'assets/img/bomb/explosion/skeleton-Fx2_5.png',
        'assets/img/bomb/explosion/skeleton-Fx2_6.png',
        'assets/img/bomb/explosion/skeleton-Fx2_7.png',
        'assets/img/bomb/explosion/skeleton-Fx2_8.png',
        'assets/img/bomb/explosion/skeleton-Fx2_9.png',
        'assets/img/bomb/explosion/skeleton-Fx2_10.png',
        'assets/img/bomb/explosion/skeleton-Fx2_11.png',
        'assets/img/bomb/explosion/skeleton-Fx2_12.png',
        'assets/img/bomb/explosion/skeleton-Fx2_13.png',
        'assets/img/bomb/explosion/skeleton-Fx2_14.png',
        'assets/img/bomb/explosion/skeleton-Fx2_15.png',
        'assets/img/bomb/explosion/skeleton-Fx2_16.png',
        'assets/img/bomb/explosion/skeleton-Fx2_17.png'
    ];
    image = 'assets/img/bomb/bomb.png'
    width = 199;
    height = 185;
    power = 15;
    range = 200;
    speedY = 50;
    isExploding = false;
    isExploded = false;

    constructor(posX, posY, speed){
        super().loadImage(this.image);
        this.loadImagesInCache(this.explodeImages);
        this.posX = posX;
        this.posY = posY;
        this.speed = speed;
        this.animate();
    }

    animate() {
        setInterval(() => {
            if(this.posY > 2000){
                this.isExploded = true;
            }
            if(this.isExploding){
                this.playExplodeAnimation()
            } else {
                this.fly();
            }
        }, 1000 / 16);
    }

    fly(){
        this.posX = this.posX+this.speed;
        this.posY = this.posY-this.speedY;
        this.speedY = this.speedY-4;
    }

    playExplodeAnimation(){
        this.ensureAnimationStartsAtBeginning(this.explodeImages);  
        this.playAnimation(this.explodeImages)  
        if (this.currentImg % this.explodeImages.length == this.explodeImages.length-1){
           this.isExploded = true;
        }
    }
}