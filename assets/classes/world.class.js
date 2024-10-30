/**
 * Represents the game world, managing the hero, enemies, projectiles, and overall game state.
 * Inherits from IntervalGenerator class.
 */
class World extends IntervalGenerator {

    allLoadingPromises = [];


    /**
     * Sound effects of the world, i.e. the theme music
     * @type {Object}
     */
    sounds = {
        thememusic: new Audio('assets/audio/soundtrack.mp3'),
    };

    /**
     * The hero character in the game.
     * @type {Hero}
     */
    hero = new Hero();

    /**
     * The laser beam used by the hero.
     * @type {Laserbeam}
     */
    laserbeam = new Laserbeam();

    /**
     * Array of tokens (collectibles) in the game.
     * @type {Array}
     */
    tokens = [];

    /**
     * Array of bombs in the game.
     * @type {Array}
     */
    bombs = [];

    /**
     * Array of projectiles in the game.
     * @type {Array}
     */
    projectiles = []

    /**
    * Array of bomb symbols displayed in the status bar.
    * @type {Array}
    */
    bombSymbols = [];

    /**
     * Array of enemies in the game.
     * @type {Array}
     */
    enemies;

    /**
     * The status bar displaying the hero's health.
     * @type {Statusbar}
     */
    statusbar = new Statusbar();

    /**
     * Background layers of the game.
     * @type {Array}
     */
    backgrounds;

    /**
     * Foreground layers of the game.
     * @type {Array}
     */
    foregrounds;

    /**
     * The length of the game level.
     * @type {number}
     */
    length;

    /**
     * The canvas element for rendering the game.
     * @type {HTMLCanvasElement}
     */
    canvas;

    /**
     * The 2D rendering context of the canvas.
     * @type {CanvasRenderingContext2D}
     */
    ctx;

    /**
     * The keyboard input handler.
     * @type {Keyboard}
     */
    keyboard;

    /**
    * The current camera offset in the X direction.
    * @type {number}
    */
    cameraX = 0;

    /**
     * Indicates whether the game sounds are muted.
     * @type {boolean}
     */
    isMuted = false;

    /**
     * Constructs a new World instance and initializes the game elements.
     * @param {HTMLCanvasElement} canvas - The canvas to draw the game on.
     * @param {Object} keyboard - The keyboard input handler.
     * @param {Object} level - The level data containing enemies, tokens, backgrounds, and foregrounds.
     */
    constructor(canvas, keyboard, level) {
        super();
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.loadLevel(level);

        this.allLoadingPromises = [
            ...this.enemies.flatMap(enemy => enemy.loadingPromises),
            this.hero.loadingPromises,  
            this.statusbar.loadingPromises 
        ].flat(); 

        this.setWorld();
        this.sounds.thememusic.loop = true;

        Promise.all(this.allLoadingPromises).then(() => {
            this.setStoppableInterval(this.runGame.bind(this));
            this.draw();
        })
    }
    /**
     * Loads the level data into the world.
     * @param {Level} level - The level data containing enemies, tokens, backgrounds, and foregrounds.
     */
    loadLevel(level) {
        this.enemies = level.enemies;
        this.tokens = level.tokens;
        this.backgrounds = level.backgrounds;
        this.foregrounds = level.foregrounds;
        this.length = level.length;
    }
    /**
     * Sets the world context for the hero and enemies.
     */
    setWorld() {
        this.hero.world = this;
        this.enemies.forEach(enemy => {
            enemy.world = this;
        })
    }
    /**
     * Draws an individual object on the canvas.
     * @param {DrawableObject} object - The object to draw.
     */
    drawObject(object) {
        if (object.otherDirection) {
            this.flipImage(object);
        }

        try {
        this.ctx.drawImage(object.img, object.posX, object.posY, object.width, object.height);
        } catch(e){
            console.log(object)
        }

        if (object.otherDirection) {
            this.reverseFlipImage(object);
        }
    }
    /**
     * Flips the image of an object horizontally.
     * @param {DrawableObject} object - The object to flip.
     */
    flipImage(object) {
        this.ctx.save();
        this.ctx.translate(object.width, 0);
        this.ctx.scale(-1, 1);
        object.posX = object.posX * -1;
    }
    /**
     * Reverses the flip effect on the object's image.
     * @param {DrawableObject} object - The object to reverse the flip.
     */
    reverseFlipImage(object) {
        this.ctx.restore();
        object.posX = object.posX * -1;
    }
    /**
     * Main draw loop for rendering the game.
     */
    draw() {
        this.resetCanvas();
        this.drawBackgrounds();
        this.drawObject(this.hero);
        this.drawEnemies();
        this.drawBombs();
        this.drawProjectiles();
        this.drawTokens();
        this.drawLaserbeam();
        this.drawForegounds();
        this.ctx.translate(this.cameraX * -1, 0);
        this.drawStatusbars();
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    };

    /**
     * Resets the canvas for a new frame.
     */
    resetCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.cameraX, 0);
    }
    /**
     * Draws the background layers.
     */
    drawBackgrounds() {
        this.backgrounds.forEach(background => {
            this.drawObject(background);
        })
    }
    /**
     * Draws the enemies in the game.
     */
    drawEnemies() {
        this.enemies.forEach(enemy => {
            this.drawObject(enemy);
        })
    }
    /**
     * Draws the bombs in the game.
     */
    drawBombs() {
        this.bombs.forEach(bomb => {
            this.drawObject(bomb);
        })
    }
    /**
     * Draws the projectiles in the game.
     */
    drawProjectiles() {
        this.projectiles.forEach(projectile => {
            this.drawObject(projectile);
        })
    }
    /**
     * Draws the collectible tokens in the game.
     */
    drawTokens() {
        this.tokens.forEach(token => {
            this.drawObject(token);
        })
    }
    /**
     * Draws the laser beam if the hero is attacking.
     */
    drawLaserbeam() {
        if (this.hero.currentState == 'attacking') {
            this.drawObject(this.laserbeam);
        }
    }
    /**
     * Draws the foreground layers.
     */
    drawForegounds() {
        this.foregrounds.forEach(foreground => {
            this.drawObject(foreground);
        })
    }
    /**
     * Draws the status bar and bomb symbols.
     */
    drawStatusbars() {
        this.drawObject(this.statusbar);
        this.bombSymbols.forEach(symbol => {
            this.drawObject(symbol);
        })
    }
    /**
     * Main game loop for updating game state.
     */
    runGame() {
        this.playThemeMusic();
        this.endGameIfHeroDead();
        this.endGameIfBossDead();
        this.removeExplodedRpojectilesFromWorld();
        this.updateStatusbar();
        this.handleTokens();
        this.handleEnemies();
        this.handleProjectiles();
    }
    /**
     * Plays the theme music if not muted.
     */
    playThemeMusic() {
        if (!this.isMuted) {
            this.sounds.thememusic.play();
        }
    }
    /**
     * Ends the game if the hero is dead.
     */
    endGameIfHeroDead() {
        if (this.hero.dieAnimationPlayed && this.hero.sounds.die.ended) {
            this.muteSounds();
            this.stopGame('lose');
        }
    }
    /**
     * Ends the game if the boss (drone) is dead.
     */
    endGameIfBossDead() {
        this.enemies.forEach(enemy => {
            if (enemy instanceof Drone && enemy.dieAnimationPlayed && enemy.sounds.die.ended) {
                this.muteSounds();
                this.stopGame('win');
            }
        })
    }
    /**
     * Handles the collection of tokens by the hero.
     */
    handleTokens() {
        for (let i = this.tokens.length - 1; i >= 0; i--) {
            const token = this.tokens[i];
            let distanceTokenToHero = this.calcDistance(token, this.hero);
            if (distanceTokenToHero < 50) {
                this.removeTokenFromWorld(i);
                if (token instanceof BombToken) {
                    this.hero.addBombToInventory();
                    if (!this.isMuted) {
                        token.sounds.pickup.play();
                    }
                    this.addBombSymbolToStatusbar();
                }
                if (token instanceof HealthpackToken) {
                    this.hero.applyHealthPack(token)
                }
            }
        }
    }
    /**
     * Handles the behavior of enemies in the game.
     */
    handleEnemies() {
        this.enemies.forEach(enemy => {
            if (enemy.currentState != 'dead') {
                let distanceToEnemy = this.calcDistance(enemy, this.hero);
                if (enemy instanceof EnemyWithClub) {
                    enemy.actBasedOnDistance(distanceToEnemy, this.hero);
                }
                if (enemy instanceof EnemyWithGun || enemy instanceof Drone) {
                    enemy.shootAtHeroIfDeteced();
                }
                if (this.hero.currentState == 'attacking' && this.isHitByLaserbeam(enemy)) {
                    enemy.reactToLaserbeam(this.laserbeam.power);
                }
                if (distanceToEnemy <= enemy.detectionRange) {
                    enemy.detectHero();
                }
                this.handleEnemyReactionsToBombs(enemy);
            }
        })
    }
    /**
     * Handles enemy reactions to bombs in the game.
     * @param {Enemy} enemy - The enemy to check for reactions.
     */
    handleEnemyReactionsToBombs(enemy) {
        this.bombs.forEach(bomb => {
            let distanceBombToEnemy = this.calcDistance(enemy, bomb);
            if (distanceBombToEnemy < bomb.range) {
                bomb.explode(enemy);
            }
        });
    }
    /**
     * Handles the behavior of projectiles and their impact on the characters
     */
    handleProjectiles() {
        for (let i = this.projectiles.length - 1; i >= 0; i--) {
            const projectile = this.projectiles[i];
            let distanceBulletToHero = this.calcDistance(projectile, this.hero);

            if (distanceBulletToHero < 150) {
                if (this.hero.isVulnerable()) {

                    if (projectile instanceof Bullet) {
                        this.hero.takeDamage(projectile.power);
                        this.removeProjectileFromWorld(i);
                    }

                    if (projectile instanceof Rocket) {
                        projectile.explode(this.hero);
                    }
                }
            }
        }
    }
    /**
     * Stops the game and displays the game over status.
     * @param {string} status - The status of the game (win/lose).
     */
    stopGame(status) {
        this.stopAllIntervals();
        this.sendGameEndEventToCanvas(status);
    }
    /**
     * Stops all intervals for the hero, enemies, bombs, and projectiles.
     */
    stopAllIntervals() {
        this.stopIntervals();
        this.hero.stopIntervals();
        this.enemies.forEach(enemy => {
            enemy.stopIntervals();
        });
        this.bombs.forEach(bomb => {
            bomb.stopIntervals();
        });
        this.projectiles.forEach(projectile => {
            projectile.stopIntervals();
        });
    }

    /**
     * Sends a custom event to the canvas indicating the end of the game.
     * @param {string} status - The status of the game (win/lose).
     */
    sendGameEndEventToCanvas(status) {
        const event = new CustomEvent('gameOver', {
            detail: { status: status }
        });
        this.canvas.dispatchEvent(event);
    }
    /**
     * Calculates the distance between two objects.
     * @param {Object} obj - The first object.
     * @param {Object} obj2 - The second object.
     * @returns {number} The calculated distance.
     */
    calcDistance(obj, obj2) {
        let dx = (obj.posX + obj.width / 2) - (obj2.posX + obj2.width / 2);
        let dy = (obj.posY + obj.height / 2) - (obj2.posY + obj2.height / 2);
        if (obj2 instanceof Hero) {
            dy = dy - obj2.offsetY;
        }
        let distance = Math.sqrt(dx * dx + dy * dy);
        return distance;
    }

    /**
     * Checks if the enemy is hit by the laser beam.
     * @param {Enemy} enemy - The enemy to check.
     * @returns {boolean} True if the enemy is hit, false otherwise.
     */
    isHitByLaserbeam(enemy) {
        let enemyOffsetX = 260;
        let enemyOffsetY = 240;

        if (this.laserbeam.posX < enemy.posX + enemy.width - enemyOffsetX &&
            this.laserbeam.posX + this.laserbeam.width > enemy.posX + enemyOffsetX &&
            this.laserbeam.posY < enemy.posY + enemy.height - enemyOffsetY &&
            this.laserbeam.posY + this.laserbeam.height > enemy.posY + enemyOffsetY) {
            return true;
        } else {
            return false;
        }
    }
    /**
     * Adds a bomb symbol to the status bar based on the hero's inventory.
     */
    addBombSymbolToStatusbar() {
        let offsetX = (this.hero.numberOfBombs - 1) * 50
        let bombSymbol = new BombSymbol(offsetX);
        this.bombSymbols.push(bombSymbol);
    }
    /**
     * Removes a token from the world based on its index.
     * @param {number} index - The index of the token to remove.
     */
    removeTokenFromWorld(index) {
        this.tokens.splice(index, 1);
    }
    /**
     * Removes a projectile from the world based on its index.
     * @param {number} index - The index of the projectile to remove.
     */
    removeProjectileFromWorld(index) {
        this.projectiles.splice(index, 1);
    }
    /**
     * Removes exploded projectiles and bombs from the world.
     */
    removeExplodedRpojectilesFromWorld() {
        this.bombs = this.bombs.filter(bomb => !bomb.isExploded);
        this.projectiles = this.projectiles.filter(projectile => !projectile.isExploded);
    }
    /**
     * Updates the status bar with the hero's health.
     */
    updateStatusbar() {
        this.statusbar.updateStatus(this.hero.hp);
    }
    /**
     * Toggles the mute state for all game sounds.
     */
    toggleMuteAll() {
        this.isMuted = !this.isMuted;
        this.hero.isMuted = !this.hero.isMuted;
        this.enemies.forEach(enemy => {
            enemy.isMuted = !enemy.isMuted;
        });
        this.bombs.forEach(bomb => {
            bomb.isMuted = !bomb.isMuted;
        });
        this.tokens.forEach(token => {
            token.isMuted = !token.isMuted;
        });
        this.projectiles.forEach(projectile => {
            projectile.isMuted = !projectile.isMuted;
        });

        if (this.isMuted) {
            this.muteSounds();
        }
    }
    /**
     * Mutes all sounds in the game.
     */
    muteSounds() {
        Object.values(this.sounds).forEach(sound => sound.pause());
    }
}