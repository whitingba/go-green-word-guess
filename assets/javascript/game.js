// create an object for my guessing game
var goGreenGame = {
    // bank of words that will be chosen at random for user to guess
    wordBank: ["straws", "plastic", "bags"],
    // random word chosen for user to guess
    randomWord: "",
    // array of guesses made by the user
    guessArray: [],
    // TODO: add wins, losses and guesses remaining later


    beginGame: function () {
        // clear the guess array
        this.guessArray = [];
        this.setRandomWord();
    },

    setRandomWord: function () {
        this.randomWord = this.wordBank[Math.floor(Math.random() * this.wordBank.length)];
    }

}