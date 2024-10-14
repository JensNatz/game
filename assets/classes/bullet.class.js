class Bullet extends MovableObject {
    image = 'assets/img/projectile/yellow_bullet.png'
    width = 136;
    height = 23;
    power = 15;
    speed = 30;
    posY = 525;

    constructor(posX){
        super().loadImage(this.image);
        this.posX = posX;
        this.animate();
    }

    animate() {
        setInterval(() => {
           this.moveLeft()
        }, 1000 / 16);
    }

}