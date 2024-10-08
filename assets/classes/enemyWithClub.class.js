class EnemyWithClub extends Character {
    walkImages = [
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

    dieImages = [
        '../assets/img/enemyWithClub/Death/Death_00.png',
        '../assets/img/enemyWithClub/Death/Death_01.png',
        '../assets/img/enemyWithClub/Death/Death_02.png',
        '../assets/img/enemyWithClub/Death/Death_03.png',
        '../assets/img/enemyWithClub/Death/Death_04.png',
        '../assets/img/enemyWithClub/Death/Death_05.png',
        '../assets/img/enemyWithClub/Death/Death_06.png',
        '../assets/img/enemyWithClub/Death/Death_07.png',
        '../assets/img/enemyWithClub/Death/Death_08.png',
        '../assets/img/enemyWithClub/Death/Death_09.png',
        '../assets/img/enemyWithClub/Death/Death_10.png',
        '../assets/img/enemyWithClub/Death/Death_11.png',
        '../assets/img/enemyWithClub/Death/Death_12.png',
        '../assets/img/enemyWithClub/Death/Death_13.png',
        '../assets/img/enemyWithClub/Death/Death_14.png',
        '../assets/img/enemyWithClub/Death/Death_15.png',
        '../assets/img/enemyWithClub/Death/Death_16.png',
        '../assets/img/enemyWithClub/Death/Death_17.png',
        '../assets/img/enemyWithClub/Death/Death_18.png',
        '../assets/img/enemyWithClub/Death/Death_19.png',
        '../assets/img/enemyWithClub/Death/Death_20.png',
        '../assets/img/enemyWithClub/Death/Death_21.png',
        '../assets/img/enemyWithClub/Death/Death_22.png',
        '../assets/img/enemyWithClub/Death/Death_23.png'
    ];
    
    posY = 150;
    width = 650;
    height = 650;
    speed = 10;
    power = 5;
    hp = 0;

    constructor(){
        super().loadImage(this.walkImages[0]);
        this.loadImagesInCache(this.walkImages, this.walkingImagesCache);
        this.loadImagesInCache(this.dieImages, this.dieImagesCache);
        this.posX = 300 + Math.random() * 500;
        this.animate(); 
    }

    animate() {
        setInterval(() => {
            if(this.isDead()){
                this.playDieAnimation();
            } else {
                this.playWalkingAnimation();   
                this.moveTowardsHero()
            }
        }, 1000/16); 
    } 

    moveTowardsHero(){
        if(this.posX + this.width/2 > this.world.hero.posX + this.world.hero.width/2){
            this.moveLeft();
        } else {
            this.moveRight();
        }
    }

}

