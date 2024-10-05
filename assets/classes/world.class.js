class World {
    canvas;
    ctx;
    hero = new Hero();
    enemies = [
        new EnemyWithClub(),
    ];
    background = new Background();
    foregrounds = [
        new Foreground('../assets/img/backgrounds/7.png', 0, 0),
        new Foreground('../assets/img/backgrounds/8.png', -4, 660)
    ]

    constructor(canvas){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    drawObject(object){
        this.ctx.drawImage(object.img, object.posX, object.posY, object.width, object.height);
    }

    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawObject(this.background);
        this.drawObject(this.hero);
        this.enemies.forEach(enemy =>{
            this.drawObject(enemy);
        })

        this.foregrounds.forEach(foreground =>{
            this.drawObject(foreground);
        })

        



        let self = this;
        requestAnimationFrame(function(){
            self.draw();
        }); 
    };

    

}