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
    if (userKeyPress.charCodeAt(0) >= 97 && userKeyPress.charCodeAt(0) <= 122) {
        //push all user guesses to the keysPressed array
        keysPressed.push(userKeyPress);
        // letter bank for the letters that have been guessed
        document.getElementById("guessBank").innerHTML = `<h3>Letters guessed: ${keysPressed.join(", ")}</h3>`;
        //reduce number of guesses by one
        guessesRemaining--;
        // update the HTML with their number of guesses remaining
        document.getElementById("guessesRemain").innerHTML = `<h4>Remaining guesses: ${guessesRemaining}</h4>`;
        // clear any messages in the text box
        document.getElementById("winningText").innerHTML = "";
    } else {
        //if a key other than a thru z is chosen a message will pop up
        document.getElementById("winningText").innerHTML = "<h2 style='color: red' >Please only use letters from a to z!</></h2>";
    }

    //loop through the current random word
    for (var j = 0; j < word.length; j++) {
        //if one of the letters matches the key press
        if (word[j] === userKeyPress) {
            //update the answer array with that key press
            answerArray[j] = userKeyPress;
            // any display it on the screen
            document.getElementById("wordDisplay").innerHTML = `<h1>${answerArray.join(" ")}</h1>`;
            //reduce the remaining letters to guess by 1
            remainingLetters--;
            // if remaining letters is equal to 0
            if (remainingLetters === 0) {
                //give a message on the screen letting them know that got it right.
                document.getElementById("winningText").innerHTML = `<h2> You guessed the word <u>${word}</u> correctly</h2>`;
                //otherwise if there is one letter to guess
            } else if (remainingLetters === 1) {
                // give them an encouraging message
                document.getElementById("winningText").innerHTML = "<h2>Only one letter to go, don't give up!</h2>";
            }
        }
    }

}








