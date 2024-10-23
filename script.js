let canvas;
let world;
let keyboard;

window.addEventListener('load', init);


function init() {
    document.getElementById('btn_start').addEventListener('click', startGame);
    document.getElementById('btn_instructions').addEventListener('click', function() {
        toggle('instructions');
      });
      document.getElementById('btn_instructions_back').addEventListener('click', function() {
        toggle('instructions');
      });
      document.getElementById('btn_imprint').addEventListener('click', function() {
        toggle('imprint');
      });
      document.getElementById('btn_imprint_back').addEventListener('click', function() {
        toggle('imprint');
      });
    document.getElementById('mute').addEventListener('click', mutePage)
}

function startGame(){
    canvas = document.getElementById('canvas');
    canvas.classList.remove('d-none');
    document.getElementById('controls').classList.add('d-none');
    keyboard = new Keyboard();
    world = new World(canvas, keyboard, level1);
};

function toggle(section) {
    document.getElementById(section).classList.toggle('d-none');
    document.getElementById('controls').classList.toggle('d-none');
    document.getElementById('wrapper').classList.toggle('bg-grey');
}

function mutePage() {
    world.toggleMuteAll();
}
