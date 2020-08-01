/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//declare a new variable called `game` and set to anything.
let game;

//create a new game when the start button is click
document.querySelector('#btn__reset').addEventListener('click', () => {
    game = new Game();
    game.resetGame();
    game.startGame();

});


//when letter on the keyboard was selected, call the handleInteraction() menthod on game object
document.getElementById('qwerty').addEventListener('click', (e) => {

    if (e.target.classList.contains('key')) {
        game.handleInteraction(e.target);
    }

});

//Add keyboard functionality (source came from stack overflow)
document.addEventListener('keydown', (e) => {

    const keyrows = document.querySelectorAll('.key');
    const letters = 'abcdefghijklmnopqrstuvwxyz';

    if (letters.includes(event.key)) {
        for (let key of keyrows) {
            if (key.innerText === event.key) {
                key.click();
            }
        }
    }

});