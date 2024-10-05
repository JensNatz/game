let canvas;
let world;
let keyboard;

window.addEventListener('load', init);
window.addEventListener('keydown', handleKeyDownEvent);
window.addEventListener('keyup', handleKeyUpEvent);

function init() {
    canvas = document.getElementById('canvas');
    keyboard = new Keyboard();
    world = new World(canvas, keyboard);
}

function handleKeyDownEvent(event) {
    switch (event.code) {
        case 'ArrowUp':
            keyboard.UP = true;
            break;
        case 'ArrowDown':
            keyboard.DOWN = true;
            break;
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
    }
}

function handleKeyUpEvent(event) {
    keyboard.UP = false;
    keyboard.DOWN = false;
    keyboard.LEFT = false;
    keyboard.RIGHT = false;
    keyboard.SPACE = false;
    keyboard.W = false;
}