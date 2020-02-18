// build game in an object

// random word is chosen at start of game

// User sees blanks where letters will be indicating the word to be guessed. Now they know the number of letters

// User presses a key to input their guess and guess is checked to see if valid
//   if correct it will be revealed in the word field and the letter will be displayed in the letter bank
//   else, their number of available guesses will decrease and the letter they chose will display in the guessed letters letter bank

// They will continue to guess until number of guesses has expired. 
//    Game Over will be displayed
//    Word will be revealed

// if they guess the entire word correctly
//   Message congratulating them will be displayed along with information about the word displayed


var goGreenWordGuess = {

    words: [
        "straws",
        "plastic",
        "bags",
        "environment",
    ],

    getWord: function () {
        var word = this.words[Math.floor(Math.random() * this.words.length)];
        document.getElementById("wordDisplay").innerHTML = `<h3>${word}</h3>`;
    },


};


