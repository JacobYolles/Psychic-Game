var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var userGuess
var loggedGuesses = []
var wins
var losses
var guessesRemaining = 9;


// function reset() {
// 	computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
//     return computerGuess;
// }


//Here is the on run function
document.onkeyup = function(event) {
    var userGuess = event.key.toLowerCase();
    var computerGuess = computerChoices [Math.floor(Math.random() * computerChoices.length)];
    console.log("User guess " + userGuess + " Computer guess " + computerGuess);

    if (userGuess === computerGuess) {
        wins++;
        console.log(wins)
    }   else if (userGuess != computerGuess) {
        guessesRemaining--
        console.log(guessesRemaining)
    }
}
    if (guessesRemaining === 0) {

    }



    document.getElementById("yourGuess").textContent = userGuess
    document.getElementById("loggedGuesses").textContent = loggedGuesses
    document.getElementById("wins").textContent = wins
    document.getElementById("losses").textContent = losses
    document.getElementById("guessesRemaining").textContent = guessesRemaining