/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//declare a new variable called `game` that’s not set to anything.
let game;

//create a new game when the start button is click
document.getElementById('btn__reset').addEventListener('click', function() {
    //use `game` variable to instantiate a new Game object.
    game.startGame();
    game = new Game();
    
});


////when letter on the keyboard was selected, call the handleInteraction() menthod on game object
//document.getElementById('qwerty').addEventListener('keydown', function() {
//    
//});