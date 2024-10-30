/**
 * Represents a status bar that displays the health points (HP) of a character.
 * Inherits from the DrawableObject class.
 */

class Statusbar extends DrawableObject {
    /**
     * The horizontal position of the status bar.
     * @type {number}
     */
    posX = 10;


    /**
     * The vertical position of the status bar.
     * @type {number}
     */
    posY = 10;

    /**
     * The width of the status bar.
     * @type {number}
     */
    width = 730;

    /**
     * The height of the status bar.
     * @type {number}
     */
    height = 205;


    /**
     * Array of status images representing different health points.
     * @type {string[]}
     */
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

    /**
     * Cache for status images.
     * @type {Object}
     */
    statusImageCache = {};

    /**
     * Index of the currently displayed image.
     * @type {number}
     */
    currentImg = 0;

    /**
     * Constructs a new Statusbar instance and loads the initial image.
     */
     constructor(){
        super().loadImage(this.statusImages[10]);
        this.loadingPromises = [
            this.loadImagesInCache(this.statusImages)
        ];
    }

    /**
     * Updates the displayed status based on the current health points (hp).
     * @param {number} hp - The current health points of the character.
     */
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