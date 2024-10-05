class Hero extends Character {
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
        '../assets/img/hero/Idle/Idle_13.png',
    ]

    speed = 3;

    constructor(){
        super().loadImage('../assets/img/hero/Idle/Idle_00.png');
        this.loadIdleImages(this.idleImages);
        this.posX = -100;
        this.posY = 150;
        this.width = 650;
        this.height = 650;
        this.animate(); 
    }

    animate() {
        setInterval(() => {
            let i = this.currentImg % this.idleImages.length;
            let path = this.idleImages[i];            
            this.img = this.idleImagesCache[path];
            this.currentImg++;            

        }, 1000/16); 

        this.moveRight();
    }

    jump(){

    }

    trow(){

    }
}