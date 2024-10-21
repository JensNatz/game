class Level {
    enemies;
    backgrounds;
    foregrounds;
    length;

    constructor(enemies, tokens, backgrounds, foregrounds, length){
        this.enemies = enemies;
        this.tokens = tokens;
        this.backgrounds = backgrounds;
        this.foregrounds = foregrounds;
        this.length = length;
    }
}