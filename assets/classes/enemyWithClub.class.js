class EnemyWithClub extends Character {
    walkingImages = [
        '../assets/img/enemyWithClub/Walk/Walk_00.png',
        '../assets/img/enemyWithClub/Walk/Walk_01.png',
        '../assets/img/enemyWithClub/Walk/Walk_02.png',
        '../assets/img/enemyWithClub/Walk/Walk_03.png',
        '../assets/img/enemyWithClub/Walk/Walk_04.png',
        '../assets/img/enemyWithClub/Walk/Walk_05.png',
        '../assets/img/enemyWithClub/Walk/Walk_06.png',
        '../assets/img/enemyWithClub/Walk/Walk_07.png',
        '../assets/img/enemyWithClub/Walk/Walk_08.png',
        '../assets/img/enemyWithClub/Walk/Walk_09.png',
        '../assets/img/enemyWithClub/Walk/Walk_10.png',
        '../assets/img/enemyWithClub/Walk/Walk_11.png',
        '../assets/img/enemyWithClub/Walk/Walk_12.png',
        '../assets/img/enemyWithClub/Walk/Walk_13.png'
    ];
    speed = 5;
    posY = 150;
    width = 650;
    height = 650;

    constructor(){
        super().loadImage('../assets/img/enemyWithClub/Idle/Idle_00.png');
        this.loadWalkingImages(this.walkingImages)
        this.posX = 300 + Math.random() * 500;
        this.animate(); 
    }

    animate() {
        setInterval(() => {
            let i = this.currentImg % this.walkingImages.length;
            let path = this.walkingImages[i];            
            this.img = this.walkingImagesCache[path];
            this.currentImg++;    
        }, 1000/16); 

        this.moveLeft();
    } 

}