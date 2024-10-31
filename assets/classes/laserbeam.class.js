/**
 * Represents a laser beam object that can be animated and has a specific power and speed.
 * Extends the MovableObject class to inherit position and movement properties.
 */
class Laserbeam extends MovableObject {
    power = 5;
    laserbeamImages = [
        'assets/img/laserbeam/skeleton-animation_0.png',
        'assets/img/laserbeam/skeleton-animation_1.png',
        'assets/img/laserbeam/skeleton-animation_2.png',
        'assets/img/laserbeam/skeleton-animation_3.png',
        'assets/img/laserbeam/skeleton-animation_4.png',
    ];
    posX = 395;
    posY = 490;
    width = 521;
    height = 144;
    speed = 15;

    constructor() {
        super().loadImage(this.laserbeamImages[0]);

        this.loadingPromises = [
            this.loadImagesInCache(this.laserbeamImages)
        ];

        Promise.all(this.loadingPromises).then(() => {
            this.setStoppableInterval(this.animate.bind(this));
        })
    }

    /**
     * Plays the laser beam animation.
     */
    playLaserbeamAnimation() {
        this.playAnimation(this.laserbeamImages)
    }

    /**
     * Animates the laser beam by calling the playLaserbeamAnimation method.
     */
    animate() {
        this.playLaserbeamAnimation();
    }

    /**
    * Adjusts the position of the laser beam to face right relative to the hero's position.
    * @param {number} heroPosX - The horizontal position of the hero.
    */
    faceRight(heroPosX) {
        if (this.otherDirection == true) {
            this.otherDirection = false;
            this.posX = heroPosX + 450;
        }
    }

    /**
     * Adjusts the position of the laser beam to face left relative to the hero's position.
     * @param {number} heroPosX - The horizontal position of the hero.
     */
    faceLeft(heroPosX) {
        if (this.otherDirection == false) {
            this.otherDirection = true;
            this.posX = heroPosX - 330;
        }
    }
}