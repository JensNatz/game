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
        this.loadImagesInCache(this.statusImages);
    }

    updateStatus(hp) {
        if (hp <= 0) {
            this.img = this.imageCache[this.statusImages[0]];
        }else if (hp <= 10) {
            this.img = this.imageCache[this.statusImages[1]];
        } else if (hp <= 20) {
            this.img = this.imageCache[this.statusImages[2]];
        } else if (hp <= 30) {
            this.img = this.imageCache[this.statusImages[3]];
        } else if (hp <= 40) {
            this.img = this.imageCache[this.statusImages[4]];
        } else if (hp <= 50) {
            this.img = this.imageCache[this.statusImages[5]];
        } else if (hp <= 60) {
            this.img = this.imageCache[this.statusImages[6]];
        } else if (hp <= 70) {
            this.img = this.imageCache[this.statusImages[7]];
        } else if (hp <= 80) {
            this.img = this.imageCache[this.statusImages[8]];
        } else if (hp <= 90) {
            this.img = this.imageCache[this.statusImages[9]];
        } else if (hp <= 100) {
            this.img = this.imageCache[this.statusImages[10]];
        }
    }
}