let canvas;
let world;
let keyboard;

/**
 * The sounds for losing and winning the game
 * @type {Object} sounds - An object to manage audio for the game.
 */
let sounds = {
  win: new Audio('assets/audio/win.wav'),
  lose: new Audio('assets/audio/lose.wav')
};

/**
 * Initializes the game by adding event listeners and setting up the canvas.
 */
window.addEventListener('load', init);

function init() {
  canvas = document.getElementById('canvas');
  canvas.addEventListener('gameOver', showEndScreen);

  document.getElementById('btn-start').addEventListener('click', startGame);
  document.getElementById('btn-again').addEventListener('click', startGame);
  document.getElementById('btn-home').addEventListener('click', showHomeScreen);
  document.getElementById('btn-instructions-back').addEventListener('click', showHomeScreen);
  document.getElementById('btn-imprint-back').addEventListener('click', showHomeScreen);
  document.getElementById('btn-instructions').addEventListener('click', function () {
    showSection('instructions');
  });
  document.getElementById('btn-imprint').addEventListener('click', function () {
    showSection('imprint');
  });
  document.getElementById('btn-mute').addEventListener('click', mute);
}

/**
 * Starts the game by initializing the world and hiding the home and end screen.
 */
async function startGame() {
  keyboard = new Keyboard();
  if (world) {
    world = null;    
  }
  showLoadingScreen()
  const level1 = await createLevel1();
  world = new World(canvas, keyboard, level1);

  world.isCompleteyLoaded().then(() => {
    document.getElementById('game').classList.remove('d-none');
    document.getElementById('controls').classList.add('d-none');
    document.getElementById('endscreen-controls').classList.add('d-none');
    hideLoadingScreen();
  })

};

/**
 * Shows the specified section of the game interface.
 * @param {string} section - The ID of the section to display.
 */
function showSection(section) {
  document.getElementById(section).classList.remove('d-none');
  document.getElementById('controls').classList.add('d-none');
  document.getElementById('wrapper').classList.add('bg-grey');
}
/**
 * Toggles the mute state of the game audio. Triggers the mute function of the world object
 */
function mute() {
  document.getElementById('btn-mute').classList.toggle('muted');
  world.toggleMuteAll();
}

/**
 * Shows the home screen of the game, resetting the interface to the main menu.
 */
function showHomeScreen() {
  const wrapper = document.getElementById('wrapper');
  wrapper.classList.add('bg-home');
  wrapper.classList.remove('bg-gameWin', 'bg-gameOver', 'bg-grey');
  document.getElementById('instructions').classList.add('d-none');
  document.getElementById('imprint').classList.add('d-none');
  document.getElementById('game').classList.add('d-none');
  document.getElementById('controls').classList.remove('d-none');
  document.getElementById('endscreen-controls').classList.add('d-none');
}

/**
 * Displays the end screen when the game is over.
 * @param {CustomEvent} event - The event that contains the game over status.
 */
function showEndScreen(event) {
  const wrapper = document.getElementById('wrapper');
  if(event.detail.status == 'lose'){
    wrapper.classList.add('bg-gameOver');
    sounds.lose.play();
  } else if(event.detail.status == 'win'){
    wrapper.classList.add('bg-gameWin');
    sounds.win.play();
  }
  document.getElementById('endscreen-controls').classList.remove('d-none');
  document.getElementById('game').classList.add('d-none');
}

/**
 * Displays the loading screen by removing the 'd-none' class from the element
 */
function showLoadingScreen(){
  document.getElementById('loadingScreen').classList.remove('d-none');
}

/**
 * Hides the loading screen by adding the 'd-none' class from the element
 */
function hideLoadingScreen(){
  document.getElementById('loadingScreen').classList.add('d-none');
}

/**
 * Prevents the context menu from appearing on mobile devices to prevent them from popping up when using touch controls
 * @param {Event} e - The event object for the 'contextmenu' event.
 */
document.addEventListener('contextmenu', function (e) {
  if (window.matchMedia('(pointer: coarse)').matches) {
      e.preventDefault();
  }
});