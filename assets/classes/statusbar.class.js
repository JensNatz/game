class Statusbar extends DrawableObject {
    posX = 10;
    posY = 10;
    width = 730;
    height = 205;
    statusImages = [
        'assets/img/statusbar/HP_bar_00.png',
        'assets/img/statusbar/HP_bar_10.png',
        'assets/img/statusbar/HP_bar_20.png',
        'assets/img/statusbar/HP_bar_30.png',
        'assets/img/statusbar/HP_bar_40.png',
        'assets/img/statusbar/HP_bar_50.png',
        'assets/img/statusbar/HP_bar_60.png',
        'assets/img/statusbar/HP_bar_70.png',
        'assets/img/statusbar/HP_bar_80.png',
        'assets/img/statusbar/HP_bar_90.png',
        'assets/img/statusbar/HP_bar_100.png'
    ];
    statusImageCache = {};
    currentImg = 0;

     constructor(){
        super().loadImage(this.statusImages[10]);
    }

    updateStatus(hp) {
        if (hp <= 0) {
            this.loadImage(this.statusImages[0]);
        }else if (hp <= 10) {
            this.loadImage(this.statusImages[1]);
        } else if (hp <= 20) {
            this.loadImage(this.statusImages[2]);
        } else if (hp <= 30) {
            this.loadImage(this.statusImages[3]);
        } else if (hp <= 40) {
            this.loadImage(this.statusImages[4]);
        } else if (hp <= 50) {
            this.loadImage(this.statusImages[5]);
        } else if (hp <= 60) {
            this.loadImage(this.statusImages[6]);
        } else if (hp <= 70) {
            this.loadImage(this.statusImages[7]);
        } else if (hp <= 80) {
            this.loadImage(this.statusImages[8]);
        } else if (hp <= 90) {
            this.loadImage(this.statusImages[9]);
        } else if (hp <= 100) {
            this.loadImage(this.statusImages[10]);
        }
    }
}