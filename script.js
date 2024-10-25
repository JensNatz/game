let canvas;
let world;
let keyboard;

window.addEventListener('load', init);


function init() {
  canvas = document.getElementById('canvas');
  canvas.addEventListener('gameOver', showEndScreen);

  document.getElementById('btn_start').addEventListener('click', startGame);
  document.getElementById('btn_again').addEventListener('click', startGame);
  document.getElementById('btn_instructions').addEventListener('click', function () {
    toggle('instructions');
  });
  document.getElementById('btn_instructions_back').addEventListener('click', function () {
    toggle('instructions');
  });
  document.getElementById('btn_imprint').addEventListener('click', function () {
    toggle('imprint');
  });
  document.getElementById('btn_imprint_back').addEventListener('click', function () {
    toggle('imprint');
  });
  document.getElementById('btn_mute').addEventListener('click', mutePage);
}

function startGame() {
  
  hideEndScreen();
  keyboard = new Keyboard();
  if (world) {
    world = null;    
  }
  const level1 = createLevel1();
  world = new World(canvas, keyboard, level1);
  document.getElementById('game').classList.remove('d-none');
  document.getElementById('controls').classList.add('d-none');
};

function toggle(section) {
  document.getElementById(section).classList.toggle('d-none');
  document.getElementById('controls').classList.toggle('d-none');
  document.getElementById('wrapper').classList.toggle('bg-grey');
}

function mutePage() {
  document.getElementById('btn_mute').classList.toggle('muted');
  world.toggleMuteAll();
}

function showEndScreen() {
  let endScreen = document.getElementById('endScreen');
  endScreen.classList.remove('d-none');
  endScreen.classList.add('gameOver');
  console.log('Ende');  
}

function hideEndScreen() {
  let endScreen = document.getElementById('endScreen');
  endScreen.classList.add('d-none');
  endScreen.classList.remove('gameOver');
  endScreen.classList.remove('gameWin');
}


