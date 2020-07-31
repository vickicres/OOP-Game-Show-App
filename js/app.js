/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//declare a new variable called `game` thatâ€™s not set to anything.
let game;

//create a new game when the start button is click
document.querySelector('#btn__reset').addEventListener('click', () => {
    //use `game` variable to instantiate a new Game object.
    game = new Game();
    game.startGame();

});


//when letter on the keyboard was selected, call the handleInteraction() menthod on game object
document.getElementById('qwerty').addEventListener('click', (e) => {
    if (e.target.classList.contains('key')) {
        game.handleInteraction(e.target);
    }

});