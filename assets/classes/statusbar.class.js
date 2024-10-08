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


}