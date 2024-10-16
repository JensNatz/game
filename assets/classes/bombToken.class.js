class BombToken extends DrawableObject {
    image = 'assets/img/bomb/bombToken.png'
    width = 93;
    height = 106;
    posY = 450;
    soundPickup = new Audio('assets/audio/pickup_bomb.wav');

    constructor(posX){
        super().loadImage(this.image);
        this.posX = posX
    }
}