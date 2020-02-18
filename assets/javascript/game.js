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




// words for the word guess game
var words = [
    "straws",
    "plastic",
    "bags",
    "environment",
];

var word = words[Math.floor(Math.random() * words.length)];
//console.log(word);

var wins = 0;
var losses = 0;
var guessesRemaining = 9;
var keysPressed = [];

var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
    document.getElementById("wordDisplay").innerHTML = `<h1>${answerArray.join(" ")}</h1>`;
}
var remainingLetters = word.length;

document.onkeyup = function (event) {
    var userKeyPress = event.key;
    //    console.log(userKeyPress);
    //only want to count guesses that are a - z
    if (userGuess.charCodeAt(0) >= 97 && userGuess.charCodeAt(0) <= 122) {
        keysPressed.push(userKeyPress);
        document.getElementById("guessBank").innerHTML = `<h2>Letters guessed: ${keysPressed.join(", ")}</h2>`;
    }



    for (var j = 0; j < word.length; j++) {
        if (word[j] === userKeyPress) {
            answerArray[j] = userKeyPress;
            document.getElementById("wordDisplay").innerHTML = `<h1>${answerArray.join(" ")}</h1>`;
            remainingLetters--;

            if (remainingLetters === 0) {
                document.getElementById("winningText").innerHTML = `<h2> You guessed the word <u>${word}</u> correctly</h2>`;
            } else if (remainingLetters === 1) {
                document.getElementById("winningText").innerHTML = "<h2>Only one letter to go, don't give up!</h2>";
            }
        }
    }

}








