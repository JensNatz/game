/**
 * Represents a game level containing enemies, tokens, backgrounds, and foregrounds.
 */
class Level {

    /**
     * Array of enemy objects
     */
    enemies;

    /**
     * Array of background objects
     */
    backgrounds;

    /**
     * Array of foreground objects
     */
    foregrounds;

    /**
     * The total width of the level in pixels.
     * @type {number}
     */
    length;

    /**
     * Initializes a new Level instance.
     * @param {Array} enemies - An array of enemies present in the level.
     * @param {Array} tokens - An array of tokens or collectibles in the level.
     * @param {Array} backgrounds - An array of background images for the level.
     * @param {Array} foregrounds - An array of foreground images for the level.
     * @param {number} length - The length of the level.
     */
    constructor(enemies, tokens, backgrounds, foregrounds, length){
        this.enemies = enemies;
        this.tokens = tokens;
        this.backgrounds = backgrounds;
        this.foregrounds = foregrounds;
        this.length = length;
    }
}