/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class phrase {
    construct(phrase) {
      this.phrase = phrase.toLowerCase();
    
    } 
    
    
    /****
    
    Display phrase on game board
 
    **/
    //adds letter placeholders to display when the game starts
    addPhraseToDisplay() {
        const phraseUl = document.querySelectorAll('#phrase ul');
        
        [this.phrase].forEach(letter => {
              if (letter !== '') {
                const listItem = document.createElement('li');
                listItem.textContent = letter;
                listItem.className = `hide letter ${letter}`;
                phraseUl.appendChild(listItem);
            } else {
                const spaceLi = document.createElement('li');
                spaceLi.className = 'space';
                listItem.appendChild(spaceLi);
            } 
            
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

