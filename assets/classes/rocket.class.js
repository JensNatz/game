/**
 * Represents a rocket that moves and can explode upon impact.
 * Extends the MovableObject class to inherit movement and positioning properties.
 */
class Rocket extends MovableObject {
    explodeImages = [
        'assets/img/rocket/explosion/Rocket_Explosion_0.png',
        'assets/img/rocket/explosion/Rocket_Explosion_1.png',
        'assets/img/rocket/explosion/Rocket_Explosion_2.png',
        'assets/img/rocket/explosion/Rocket_Explosion_3.png',
        'assets/img/rocket/explosion/Rocket_Explosion_4.png',
        'assets/img/rocket/explosion/Rocket_Explosion_5.png',
        'assets/img/rocket/explosion/Rocket_Explosion_6.png',
        'assets/img/rocket/explosion/Rocket_Explosion_7.png',
        'assets/img/rocket/explosion/Rocket_Explosion_8.png',
        'assets/img/rocket/explosion/Rocket_Explosion_9.png'
    ];
    image = 'assets/img/rocket/rocket.png';
    width = 242;
    height = 134;
    power = 20;
    speed = 15;
    posY = 480;
    sounds = {
        explosion: new Audio('assets/audio/explosion.wav')
    }
    isExploding = false;
    isExploded = false;

    constructor(posX) {
        super().loadImage(this.image);
        this.posX = posX;
        
        this.loadingPromises = [
            this.loadImagesInCache(this.explodeImages)
        ];

        this.setStoppableInterval(this.animate.bind(this));
    }

    /**
     * Animates the rocket's movement or explosion based on its state.
     */
    animate() {
        if (this.isExploding) {
            if (!this.isMuted) {
                this.sounds.explosion.play();
            }
            this.playExplodeAnimation()
        } else {
            if (this.otherDirection) {
                this.moveRight()
            } else {
                this.moveLeft()
            }
        }
    }

    /**
     * Initiates the explosion of the rocket and applies damage to a target.
     * @param {Object} target - The target object to take damage from the rocket's explosion.
     */
    explode(target) {
        if (this.isExploding == false) {
            this.isExploding = true;
            target.takeDamage(this.power);
        }
    }

    /**
     * Plays the explosion animation of the rocket.
     */
    playExplodeAnimation() {
        this.ensureAnimationStartsAtBeginning(this.explodeImages);
        this.playAnimation(this.explodeImages)
        if (this.currentImg % this.explodeImages.length == this.explodeImages.length - 1) {
            this.isExploded = true;
            this.isExploding = false;
        }
    }
}