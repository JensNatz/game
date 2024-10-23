let canvas;
let world;
let keyboard;

window.addEventListener('load', init);


function init() {
    document.getElementById('button').addEventListener('click', startGame);
    document.getElementById('mute').addEventListener('click', mutePage)
}

function startGame(){
    canvas = document.getElementById('canvas');
    keyboard = new Keyboard();
    world = new World(canvas, keyboard, level1);
};

function mutePage() {
    world.toggleMuteAll();
}
