/**
 * Represents any  object in the game, that can be drawn on the canvas
*/

class DrawableObject extends IntervalGenerator {
    /**
     * Array of promises representing the loading of images.
     * @type {Promise[]}
     */
    loadingPromises;

    /**
     * The vertical position of the object
     * @type {number}
     */
    posX;

    /**
     * The horizontal position of the object
     * @type {number}
     */
    posY;

    /**
     * The current img representing the object
     * @type {Image}
     */
    img;

    /**
     * The width of the object
     * @type {number}
     */
    width;
     /**
     * The height of the object
     * @type {number}
     */
    height;

     /**
     * The current key of the images array, used to iterate trough animations
     * @type {number}
     */
    currentImg = 0;

     /**
     * An Object containing all Image Objects of the Object
     * @type {Object}
     */
    imageCache = {};

     /**
     * Rerepsents whether the Object is facing in the other direction
     * @type {boolean}
     */
    otherDirection = false;

     /**
     * An Object containing all sounds of the Object
     * @type {Object}
     */
    sounds = {};

    /**
     * Rerepsents whether the Object is muted or not
     * @type {boolean}
     */
    isMuted = false;

    /**
     * Creates an instance of the `DrawableObject` class.
     * Calls the constructor of the `IntervalGenerator` class.
     */
    constructor(){
        super();
    }

    /**
     * Loads an image from a specified source.
     * @param {string} src - The source URL of the image to load.
     */
    loadImage(src) {
        this.img = new Image();
        this.img.src = src;
    }

     /**
     * Loads an array of images into the cache.
     * @param {string[]} imageArray - Array of image paths to load.
     * @returns {Promise} A promise that resolves when all images are loaded.
     */
    loadImagesInCache(imageArray) {
        const loadPromises = imageArray.map(path => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = path;
    
            img.onload = () => {
              this.imageCache[path] = img;
              resolve(); 
            };
          });
        });
            return Promise.all(loadPromises);
      }

    /**
     * Plays the animation using an array of image paths.
     * Updates the current image based on the animation sequence.
     * @param {string[]} imageArray - Array of image paths for the animation.
     */
    playAnimation(imageArray) {
        let i = this.currentImg % imageArray.length;
        let path = imageArray[i];
        this.img = this.imageCache[path];
        this.currentImg++;
    }
    
    /**
     * Ensures that the animation starts at the beginning if the current
     * image is not part of the provided image array.
     * @param {string[]} imageArray - Array of image paths to check against.
     */
    ensureAnimationStartsAtBeginning(imageArray){
        const assetsIndex = this.img.src.indexOf('assets/');
        const relevantPath = this.img.src.slice(assetsIndex); 
        if(!imageArray.includes(relevantPath)){
            this.currentImg = 0;            
        }                 
    }

    /**
     * Stops and resets the specified sound.
     * @param {HTMLAudioElement} sound - The sound to stop.
     */
    endSound(sound){
        sound.pause();
        sound.currentTime = 0;
    }
    
    /**
     * Mutes all sounds if the object is muted.
     */
    muteSounds(){
        if(this.isMuted){
            Object.values(this.sounds).forEach(sound => sound.pause());
        }
    }
}