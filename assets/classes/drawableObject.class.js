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

    loadImage(src) {
        this.img = new Image();
        this.img.src = src;
    }

    loadImagesInCache(imageArray) {
        // Erstelle für jeden Bildpfad eine Promise
        const loadPromises = imageArray.map(path => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = path;
    
            // Wenn das Bild geladen ist, speichere es im Cache und löse die Promise auf
            img.onload = () => {
              this.imageCache[path] = img;
              resolve(); // Die Promise wird aufgelöst, wenn das Bild fertig ist
            };
          });
        });
    
        // Warte, bis alle Bild-Promises aufgelöst sind
        return Promise.all(loadPromises);
      }

    playAnimation(imageArray) {
        let i = this.currentImg % imageArray.length;
        let path = imageArray[i];
        this.img = this.imageCache[path];
        this.currentImg++;
    }

    ensureAnimationStartsAtBeginning(imageArray){
        const assetsIndex = this.img.src.indexOf('assets/');
        const relevantPath = this.img.src.slice(assetsIndex); 
        if(!imageArray.includes(relevantPath)){
            this.currentImg = 0;            
        }                 
    }

    endSound(sound){
        sound.pause();
        sound.currentTime = 0;
    }

    muteSounds(){
        if(this.isMuted){
            Object.values(this.sounds).forEach(sound => sound.pause());
        }
    }
}