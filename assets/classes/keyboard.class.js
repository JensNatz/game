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
      document.getElementById('btn_left').addEventListener('touchstart', () => {
         this.LEFT = true;
      });
      document.getElementById('btn_left').addEventListener('touchend', () => {
         this.LEFT = false;
      });

      document.getElementById('btn_right').addEventListener('touchstart', () => {
         this.RIGHT = true;
      });
      document.getElementById('btn_right').addEventListener('touchend', () => {
         this.RIGHT = false;
      });

      document.getElementById('btn_jump').addEventListener('touchstart', () => {
         this.SPACE = true;
      });
      document.getElementById('btn_jump').addEventListener('touchend', () => {
         this.SPACE = false;
      });

      document.getElementById('btn_laser').addEventListener('touchstart', () => {
         this.A = true;
      });
      document.getElementById('btn_laser').addEventListener('touchend', () => {
         this.A = false;
      });

      document.getElementById('btn_bomb').addEventListener('touchstart', () => {
         this.W = true;
      });
      document.getElementById('btn_bomb').addEventListener('touchend', () => {
         this.W = false;
      });
   }

}