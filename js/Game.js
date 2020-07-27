/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


class Game {
    construct() {
        this.miss = 0;
        this.phrase = this.createPharse();
        this.activePharse = null;  
    }
    
    /**
    * create phrase for use in game
    * @return{array} An array of phrases that could be use in the game
    */
    createPhrases() {
        const phrases = [
            new Phrase('Find the way you want to be and be happy about it'),
             new Phrase('Life is like a box of chocolates'),
             new Phrase('So many books, so little time'),
             new Phrase('We accept the love we think we deserve'),
             new Phrase('Love all, trust a few, do worng to none')
        ];
        return phrases;
        
    }
    
    /**
    Begins game by selecting a random phrase and displaying it to user
    **/
    
    startGame() {    
        // hides the start screen overlay
        document.getElementById('overlay').style.display = 'none';
        //select a Phrase object from the Game object’s array of phrases
        this.activePharse = this.getRandomPhrase();
        //adds the phrase to the gameboard
        this.activePharse.addPhraseToDisplay();
    
}
    
    /***
    * selects random phrase from phrases property
    * @return {object} phrase object chosen to be used
    **/

    getRandomPhrase() {
        
      //randomly retrieves one of the phrases stored in the phrases array and returns it  
        return this.phrases[Math.floor(Math.random() * (this.phrase.length))];
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
//    
//    removeLife() {
//        
//    //this method removes a life from the scoreboard, by replacing one of the liveHeart.png images with a lostHeart.png image (found in the images folder) and increments the missed property. If the player has five missed guesses (i.e they're out of lives), then end the game by calling the gameOver() method.
//        
//    }
//    
//    checkForWin() {
//    //this method checks to see if the player has revealed all of the letters in the active phrase.
//        
//        
//    }
//    
//    gameOver() {
//        
//    //this method displays the original start screen overlay, and depending on the outcome of the game, updates the overlay h1 element with a friendly win or loss message, and replaces the overlay’s start CSS class with either the win or lose CSS class
//        
//        
//    }
}



