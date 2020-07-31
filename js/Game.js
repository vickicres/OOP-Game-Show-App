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
          new Phrase('You can do it'),
          new Phrase('Work hard play hard'),
          new Phrase('Card game'),
          new Phrase('Harry Potter'),
          new Phrase('Loving it')
        ];

        return randomPhrases;
    }
    /**
    Begins game by selecting a random phrase and displaying it to user
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

    getRandomPhrase() {

        //randomly retrieves one of the phrases stored in the phrases array and returns it  
        return this.phrases[Math.floor(Math.random() * (this.phrases.length))];

    }

    /**
     * Handles onscreen keyboard button clicks
     * @param (HTMLButtonElement) button - The clicked button element
     */
    handleInteraction(button) {

        //it checks to see if the button clicked by the player matches a letter in the phrase, and the directs the game based on a correct or incorrect guess.
        //disable the selected letter’s onscreen keyboard button
        let letter = button.textContent;
        button.disabled = true;

        //If the phrase includes the guessed letter, add the chosen CSS class to the selected letter's keyboard button, call the showMatchedLetter() method on the phrase, and then call the checkForWin() method. If the player has won the game, also call the gameOver() method
        if (this.activePhrase.checkLetter(letter)) {
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(letter);

            if (this.checkForWin()) {
                this.gameOver(true);
            }
        //If the phrase does not include the guessed letter, add the wrong CSS class to the selected letter's keyboard button call the removeLife() method
        } else {
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

        const hearts = document.querySelectorAll('.tries');

        hearts[0].firstChild.src = 'images/lostHeart.png';
        //        hearts[0].classList.remove('tries');

        //depends on how many times the player missed will loose one live at the time until no more lives 
        this.missed += 1;
        // if the player miss 5 chance then game over
        if (this.missed === 5) {
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
        const hideLetter = document.querySelectorAll('.hide');
        if (hideLetter.length !== 0) {
            return false;
        } else {
            // if all of the letters revealed in the active phrase then return true
            return true;
        }
    }
    /**
     * Displays game over message
     * @param {boolean} gameWon - Whether or not the user won the game
     */
    gameOver(gameWon) {

        //this method displays the original start screen overlay, and depending on the outcome of the game, updates the overlay h1 element with a friendly win or loss message, and replaces the overlay’s start CSS class with either the win or lose CSS class
        const overlay = document.querySelector('#overlay');
        const gameOverMessage = document.querySelector('#game-over-message');
        overlay.classList.remove('start');

        if (gameWon) {
            overlay.style.display = '';
            gameOverMessage.textContent = 'You got it! Good job.';
            overlay.className = 'win';
        } else {
            overlay.style.display = '';
            gameOverMessage.textContent = 'Oops..! Try again.';
            overlay.className = 'lose';
        }

    }
}