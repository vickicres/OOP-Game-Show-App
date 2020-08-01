/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;

    }

    /**
     * create phrase for use in game
     * @return{array} An array of phrases that could be use in the game
     */

    createPhrases() {
        const randomPhrases = [
          new Phrase('Just do it'),
          new Phrase('Work hard play hard'),
          new Phrase('Card game'),
          new Phrase('Harry Potter'),
          new Phrase('Loving it')
        ];

        return randomPhrases;
    }

    /**
     * Begins game by selecting a random phrase and displaying it to user
     * 
     **/

    startGame() {
        // hides the start screen overlay
        document.getElementById('overlay').style.display = 'none';
        //select a Phrase object from the Game object’s array of phrases
        this.activePhrase = this.getRandomPhrase();
        //adds the phrase to the gameboard
        this.activePhrase.addPhraseToDisplay();

    }

    /***
     * selects random phrase from phrases property
     * @return {object} phrase object chosen to be used
     **/

    //randomly retrieves one of the phrases stored in the phrases array and returns it 

    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }

    /**
     * Handles onscreen keyboard button clicks
     * @param (HTMLButtonElement) button - The clicked button element
     */

    handleInteraction(button) {

        //disable the selected letter’s onscreen keyboard button
        const letter = button.innerHTML;
        button.disabled = true;

        //If the phrase includes the guessed letter, add the chosen CSS class to the selected letter's keyboard button, call the showMatchedLetter() method on the phrase, and then call the checkForWin() method. If the player has won the game, also call the gameOver() method
        if (this.activePhrase.checkLetter(letter)) {
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(letter);

            if (this.checkForWin()) {
                this.gameOver(true);
            }

        } else {
            //If the phrase does not include the guessed letter, add the wrong CSS class to the selected letter's keyboard button call the removeLife() method
            button.classList.add('wrong');
            this.removeLife();

        }

        //        console.log(button);
    }

    /**
     * Increases the value of the missed property
     * Removes a life from the scoreboard
     * Checks if player has remaining lives and ends game if player is out
     */
    removeLife() {
        const hearts = document.querySelector('.tries');
        const lives = hearts.firstChild;

        lives.src = 'images/lostHeart.png';
        hearts.classList.remove('tries');

        //depends on how many times the player missed will loose one live at the time until no more lives 
        this.missed += 1;
        // if the player miss 5 chance then game over
        if (this.missed >= 5) {
            this.gameOver(false);

        }

    }

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */

    checkForWin() {
        //this method checks to see if the player has revealed all of the letters in the active phrase.
        const hideLetters = document.querySelectorAll('li');

        for (let i = 0; i < hideLetters.length; i += 1) {
            if (hideLetters[i].classList.contains('hide')) {
                return false;
            }
        }
        // if all of the letters revealed in the active phrase then return true
        return true;

    }
    /**
     * Displays game over message
     * @param {boolean} gameWon - Whether or not the user won the game
     */
    gameOver(gameWon) {

        const overlay = document.querySelector('#overlay');
        const gameOverMessage = document.querySelector('#game-over-message');
        const resetButton = document.querySelector('#btn__reset');
        overlay.classList.remove('start');

        if (gameWon) {
            overlay.style.display = '';
            gameOverMessage.textContent = 'You got it! Good job.';
            overlay.className = 'win';
            resetButton.textContent = 'Play More';
            resetButton.style.color = '#000';
            resetButton.style.backgroundColor = '#CF78C5';
        } else {
            overlay.style.display = '';
            gameOverMessage.textContent = 'Oops..! Try again.';
            overlay.className = 'lose';
            resetButton.textContent = 'Play Again';
            resetButton.style.backgroundColor = '#5FDCF5';
        }

    }

    /**
     * when the player lose the game to restart the game again 
     * 
     */

    resetGame() {

        //remove all the li elements
        const removeLi = document.querySelectorAll('#phrase ul li');
        for (let i = 0; i < removeLi.length; i += 1) {
            removeLi[i].remove();
        }

        //enable all the keys and reset the classname
        const keyButton = document.querySelectorAll('.key');

        for (let i = 0; i < keyButton.length; i += 1) {
            keyButton[i].className = 'key';
            keyButton[i].disabled = false;
        }

        //reset all the heart images
        this.missed = 0;
        const resetHearts = document.querySelectorAll('#scoreboard ol li');

        for (let i = 0; i < 5; i += 1) {
            resetHearts[i].className = 'tries';
            resetHearts[i].firstChild.src = 'images/liveHeart.png';
        }

    }
}