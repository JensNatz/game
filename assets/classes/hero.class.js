class Hero extends Character {
    world;
    idleImages = [
        '../assets/img/hero/Idle/Idle_00.png',
        '../assets/img/hero/Idle/Idle_01.png',
        '../assets/img/hero/Idle/Idle_02.png',
        '../assets/img/hero/Idle/Idle_03.png',
        '../assets/img/hero/Idle/Idle_04.png',
        '../assets/img/hero/Idle/Idle_05.png',
        '../assets/img/hero/Idle/Idle_06.png',
        '../assets/img/hero/Idle/Idle_07.png',
        '../assets/img/hero/Idle/Idle_08.png',
        '../assets/img/hero/Idle/Idle_09.png',
        '../assets/img/hero/Idle/Idle_10.png',
        '../assets/img/hero/Idle/Idle_11.png',
        '../assets/img/hero/Idle/Idle_12.png',
        '../assets/img/hero/Idle/Idle_13.png'
    ];
    walkImages = [
        '../assets/img/hero/Walk/Walk_00.png',
        '../assets/img/hero/Walk/Walk_01.png',
        '../assets/img/hero/Walk/Walk_02.png',
        '../assets/img/hero/Walk/Walk_03.png',
        '../assets/img/hero/Walk/Walk_04.png',
        '../assets/img/hero/Walk/Walk_05.png',
        '../assets/img/hero/Walk/Walk_06.png',
        '../assets/img/hero/Walk/Walk_07.png',
        '../assets/img/hero/Walk/Walk_08.png',
        '../assets/img/hero/Walk/Walk_09.png',
        '../assets/img/hero/Walk/Walk_10.png',
        '../assets/img/hero/Walk/Walk_11.png',
        '../assets/img/hero/Walk/Walk_12.png',
        '../assets/img/hero/Walk/Walk_13.png'
    ];
    jumpImages = [
        '../assets/img/hero/Jump/Jump_00.png',
        '../assets/img/hero/Jump/Jump_01.png',
        '../assets/img/hero/Jump/Jump_02.png',
        '../assets/img/hero/Jump/Jump_03.png',
        '../assets/img/hero/Jump/Jump_04.png',
        '../assets/img/hero/Jump/Jump_05.png',
        '../assets/img/hero/Jump/Jump_06.png',
        '../assets/img/hero/Jump/Jump_07.png',
        '../assets/img/hero/Jump/Jump_08.png',
        '../assets/img/hero/Jump/Jump_09.png'
    ];
    speed = 3;
    jumpImagesCache = {};

    constructor() {
        super().loadImage('../assets/img/hero/Idle/Idle_00.png');
        this.loadIdleImages(this.idleImages);
        this.loadWalkingImages(this.walkImages);
        this.loadJumpImages(this.jumpImages);
        this.posX = -100;
        this.posY = 150;
        this.width = 650;
        this.height = 650;
        this.animate();
    }

    loadJumpImages(array) {
        array.forEach(path => {
            let img = new Image();
            img.src = path;
            this.jumpImagesCache[path] = img;
        });
    }


    animate() {
        setInterval(() => {

            if (this.world.keyboard.RIGHT) {
                let i = this.currentImg % this.walkImages.length;
                let path = this.walkImages[i];
                this.img = this.walkingImagesCache[path];
                this.currentImg++;
                this.moveRight();
            }
            else if (this.world.keyboard.LEFT) {
                let i = this.currentImg % this.walkImages.length;
                let path = this.walkImages[i];
                this.img = this.walkingImagesCache[path];
                this.currentImg++;
                this.moveLeft();
            }else if (this.world.keyboard.SPACE) {
                this.jump();
            } else {
                this.idle();
            }

        }, 1000 / 16);

    }


    jump() {
        let i = this.currentImg % this.jumpImages.length;
        let path = this.jumpImages[i];
        this.img = this.jumpImagesCache[path];
        this.currentImg++;
    }

    trow() {

    }
}