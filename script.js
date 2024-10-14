let canvas;
let world;
let keyboard;

window.addEventListener('load', init);
window.addEventListener('keydown', handleKeyDownEvent);
window.addEventListener('keyup', handleKeyUpEvent);


function init() {
    document.getElementById('button').addEventListener('click', startGame)
    
}

function startGame(){
    canvas = document.getElementById('canvas');
    keyboard = new Keyboard();
    world = new World(canvas, keyboard, level1);
};

function handleKeyDownEvent(event) {
    keyboard.KEYPRESSED = true;
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
        case 'KeyA':
            keyboard.A = true;
            break;
    }
}

function handleKeyUpEvent(event) {
    keyboard.KEYPRESSED = false;
    switch (event.code) {
        case 'ArrowUp':
            keyboard.UP = false;
            break;
        case 'ArrowDown':
            keyboard.DOWN = false;
            break;
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
}