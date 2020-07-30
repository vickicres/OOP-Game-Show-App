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


    //    handleInteraction() {
    //        
    //     //it checks to see if the button clicked by the player matches a letter in the phrase, and the directs the game based on a correct or incorrect guess.
    //        
    //     //disable the selected letter’s onscreen keyboard button
    //        
    //     //If the phrase does not include the guessed letter, add the wrong CSS class to the selected letter's keyboard button call the removeLife() method
    //        
    //     //If the phrase includes the guessed letter, add the chosen CSS class to the selected letter's keyboard button, call the showMatchedLetter() method on the phrase, and then call the checkForWin() method. If the player has won the game, also call the gameOver() method
    //        
    //        
    //    }

    /**
     * Increases the value of the missed property
     * Removes a life from the scoreboard
     * Checks if player has remaining lives and ends game if player is out
     */
    removeLife(){
        const heart = document.getElementsByClassName('tries');
        let lostHeart = heart.firstChild;
        lostHeart.src = 'images/lostHeart.png';
        heart.classList.remove('tries');
        this.missed += 1;

        if (this.missed === 5) {
            this.gameOver(this.checkForWin());

        }

        /**
         * Checks for winning move
         * @return {boolean} True if game has been won, false if game wasn't won
         */
        checkForWin(){
            //this method checks to see if the player has revealed all of the letters in the active phrase.
            const checkletter = document.querySelectorAll('.letter');
            for (let i = 0; i < checkLetter.length; i += 1) {
                if (checkLetter[i].classList.contains('hide')) {
                    return false;
                }
            }
            return true;
            
        }
            


        /**
         * Displays game over message
         * @param {boolean} gameWon - Whether or not the user won the game
         */

        gameOver(gameWon){

            //this method displays the original start screen overlay, and depending on the outcome of the game, updates the overlay h1 element with a friendly win or loss message, and replaces the overlay’s start CSS class with either the win or lose CSS class

            const overlay = document.getElementById('overlay');
            const gameOverMessage = document.getElementById('game-over-message');
            overlay.classList.remove('start');

            if (gameWon) {
                overlay.style.display = '';
                gameOverMessage.textContent = 'You got it! Good job.';
                overlay.classList.add('win');
            } else {
                overlay.style.display = '';
                gameOverMessage.textContent = 'Wrong letter! Try again.';
                overlay.classList.add('lose');
            }


        }
    }