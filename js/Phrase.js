/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class phrase {
    construct(phrase) {
        this.phrase = phrase.toLowerCase();

    }

    /****
    
    Display phrase on game board
    adds letter placeholders to display when the game starts
 
    **/
    
    addPhraseToDisplay() {
                const phraseUl = document.querySelector('#phrase ul');
                const letters = this.phrase.split('');
        
                //create li elements add to the display and loop over each array
                letters.forEach(letter => {

                    if (letter !== '') {
                        let listItem = document.createElement('li');
                        listItem.className = `hide letter ${letter}`;
        
                    } else {
                        listItem.className = 'space';

                    }
                    phraseUl.appendChild(itemLi);

                });

    }

    //// check to see if the letter selected by the player matches a letter in the phrase
    //    checkLetter() {
    //    
    //    }
    //
    //
    ////reveals the letter on the board that matches the selection
    //    showMatchedLetter() {
    //    
    //    }

}