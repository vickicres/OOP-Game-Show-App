/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();

    }

    /****
    
    Display phrase on game board
    adds letter placeholders to display when the game starts
 
    **/

    addPhraseToDisplay() {
        const phraseUl = document.querySelector('#phrase ul');
        const letters = this.phrase.split('');
        console.log(letters)
        let listItem;
        //create li elements add to the display and loop over each array
        letters.forEach(letter => {
            if (letter !== ' ') {
                listItem = document.createElement('li');
                listItem.className = `hide letter ${letter}`;
                listItem.textContent = letter;
            } else {
                listItem = document.createElement('li');
                listItem.className = 'space';
                listItem.textContent = letter;
            }
            phraseUl.appendChild(listItem);
        });
    }

    /**
     * Checks if passed letter is in phrase
     * @param (string) letter - Letter to check
     */

    // check to see if the letter selected by the player matches a letter in the phrase
    checkLetter(letter) {
        return this.phrase.includes(letter);
    }

    /**
     * Displays passed letter on screen after a match is found
     * @param (string) letter - Letter to display
     */

    showMatchedLetter(letter) {

        if (this.checkLetter(letter)) {
            const showLetter = document.querySelectorAll('li');

            //reveals the letter on the board that matches the selection
            for (let i = 0; i < showLetter.length; i += 1) {
                if (showLetter[i].textContent === letter) {
                    showLetter[i].className = `show letter ${letter}`;
                }
            }

        }
    }

}