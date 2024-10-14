class HealthpackToken extends DrawableObject {
    image = 'assets/img/healthpack/healthpackToken.png'
    width = 93;
    height = 100;
    posY = 450;
    addHp = 10;

    constructor(posX){
        super().loadImage(this.image);
        this.posX = posX
    }
}