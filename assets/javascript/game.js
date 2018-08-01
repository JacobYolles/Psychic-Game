var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var loggedGuesses = []
var wins
var losses
var guessesRemaining = 9;



//Here is the on run function
document.onkeyup = function(event) {
    var userGuess = event.key.toLowerCase();
    var computerGuess = computerChoices [Math.floor(Math.random() * computerChoices.length)];
    console.log("User guess " + userGuess + " Computer guess " + computerGuess);

    if (userGuess === computerGuess) {
        wins++;
    }   else if (userGuess != computerGuess) {
        guessesRemaining--
    }
}