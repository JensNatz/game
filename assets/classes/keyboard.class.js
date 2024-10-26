class Keyboard {
   KEYPRESSED = false;
   SPACE = false;

   UP = false;
   DOWN = false;
   LEFT = false;
   RIGHT = false;

   W = false;
   A = false;

   constructor() {
      this.bindKeyEvents();
      this.bindButtonEvents();
   }

   bindKeyEvents() {
      window.addEventListener('keydown', (event) => {
         keyboard.KEYPRESSED = true;
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
         keyboard.KEYPRESSED = false;
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