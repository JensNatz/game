/**
 * Represents any  object in the game, that can be drawn on the canvas
*/

class DrawableObject extends IntervalGenerator {
    loadingPromises;
    posX;
    posY;
    img;
    width;
    height;
    currentImg = 0;
    imageCache = {};
    otherDirection = false;
    sounds = {};
    isMuted = false;

    
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