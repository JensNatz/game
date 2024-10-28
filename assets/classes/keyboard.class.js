/**
 * A class to handle keyboard and button input for controlling the game character.
 */
class Keyboard {
   /**
     * Indicates whether the SPACE key is pressed.
     * @type {boolean}
     */
   SPACE = false;

   /**
    * Indicates the state of the directional keys.
    * @type {boolean}
    */
   UP = false;
   DOWN = false;
   LEFT = false;
   RIGHT = false;

   /**
    * Indicates whether the W and A keys are pressed for additional controls.
    * @type {boolean}
    */
   W = false;
   A = false;

   /**
    * Initializes the Keyboard class and binds key and button events.
    */
   constructor() {
      this.bindKeyEvents();
      this.bindButtonEvents();
   }

   /**
     * Binds keyboard events to handle key presses and releases.
     */
   bindKeyEvents() {
      window.addEventListener('keydown', (event) => {
         switch (event.code) {
            case 'ArrowLeft':
               keyboard.LEFT = true;
               break;
            case 'ArrowRight':
               keyboard.RIGHT = true;
               break;
            case 'Space':
               keyboard.SPACE = true;
               break;
            case 'KeyW':
               keyboard.W = true;
               break;
            case 'KeyA':
               keyboard.A = true;
               break;
         }
      });

      window.addEventListener('keyup', (event) => {
         switch (event.code) {
            case 'ArrowLeft':
               keyboard.LEFT = false;
               break;
            case 'ArrowRight':
               keyboard.RIGHT = false;
               break;
            case 'Space':
               keyboard.SPACE = false;
               break;
            case 'KeyW':
               keyboard.W = false;
               break;
            case 'KeyA':
               keyboard.A = false;
               break;
         }
      });
   }
      
   /**
     * Binds touch events to button elements for mobile controls.
   */
   bindButtonEvents() {
      document.getElementById('btn-left').addEventListener('touchstart', () => {
         this.LEFT = true;
      });
      document.getElementById('btn-left').addEventListener('touchend', () => {
         this.LEFT = false;
      });

      document.getElementById('btn-right').addEventListener('touchstart', () => {
         this.RIGHT = true;
      });
      document.getElementById('btn-right').addEventListener('touchend', () => {
         this.RIGHT = false;
      });

      document.getElementById('btn-jump').addEventListener('touchstart', () => {
         this.SPACE = true;
      });
      document.getElementById('btn-jump').addEventListener('touchend', () => {
         this.SPACE = false;
      });

      document.getElementById('btn-laser').addEventListener('touchstart', () => {
         this.A = true;
      });
      document.getElementById('btn-laser').addEventListener('touchend', () => {
         this.A = false;
      });

      document.getElementById('btn-bomb').addEventListener('touchstart', () => {
         this.W = true;
      });
      document.getElementById('btn-bomb').addEventListener('touchend', () => {
         this.W = false;
      });
   }

}