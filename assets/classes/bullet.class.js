class Bullet extends MovableObject {
    image = 'assets/img/projectile/yellow_bullet.png'
    width = 136;
    height = 23;
    power = 10;
    speed = 30;
    posY = 520;

    constructor(posX){
        super().loadImage(this.image);
        this.posX = posX;
        this.animate();
    }

    animate() {
        setInterval(() => {
            if(this.otherDirection){
                this.moveRight()
            } else {
                this.moveLeft()
            }
        }, 1000 / 16);
    }

}