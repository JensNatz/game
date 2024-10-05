let canvas;
let world;
let keyboard;

window.addEventListener('load', init);
window.addEventListener('keydown', handleKeyDownEvent);
window.addEventListener('keyup', handleKeyUpEvent);

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas);
    keyboard = new Keyboard();
}

function handleKeyDownEvent(event){
    switch (event.code) {
        case 'ArrowUp':
           keyboard.UP = true;
        case 'ArrowDown':
            keyboard.DOWN = true;
        case 'ArrowLeft':
            keyboard.LEFT = true;
        case 'ArrowRight':
            keyboard.RIGHT = true;
        case 'Space':
            keyboard.SPACE = true;
        case 'KeyW':
            keyboard.W = true;
    }

    console.log(keyboard);
    
}

function handleKeyUpEvent(event){
    switch (event.code) {
        case 'ArrowUp':
           keyboard.UP = false;
        case 'ArrowDown':
            keyboard.DOWN = false;
        case 'ArrowLeft':
            keyboard.LEFT = false;
        case 'ArrowRight':
            keyboard.RIGHT = false;
        case 'Space':
            keyboard.SPACE = false;
        case 'KeyW':
            keyboard.W = false;
    }

    console.log(keyboard);
}