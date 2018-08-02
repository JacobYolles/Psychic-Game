

var wins = 0;
var losses = 0;
var guesses = 9;
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var loggedGuesses = [];
var userGuess = [];

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

function reset() {
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    return computerGuess;
}

//functions
//Here is the on run function
document.onkeyup = function (event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    loggedGuesses.push(userGuess);
    console.log("User guess " + userGuess + " Computer guess " + computerGuess);

    if (userGuess === computerGuess) {
        wins++;
        console.log(wins);
        computerGuess === reset();
        guesses = 9;
        loggedGuesses.length = 0;
    }
 if (userGuess !== computerGuess) {
        guesses-
        console.log(guesses);
    }

    if (guesses > 0) {
        guesses = guesses - 1;
        console.log("you have  " + guesses + " guesses left");
    }

 if (guesses === 0) {
    losses++;
    console.log(losses);
    computerGuess = reset();
    guesses = 9;
    loggedGuesses.length = 0;
}



var html =

"<h1>The Psychic Game</h1>" + 
"<p>Guess what letter I'm thinking of!</p>" +
"<p>Your Guess: " + 
userGuess + 
"</p>" +
"<p>Total Wins: " + 
wins + 
"</p>" +
"<p>Total Losses: " + 
losses + 
"</p>" +
"<p>Guesses Left: " + 
guesses + 
"</p>" +
"<p>Your Guesses so far: " +
loggedGuesses +
"</p>"
;
document.querySelector('#psychicgame').innerHTML = html;
}
    // document.getElementById("userGuess").textContent=userGuess
    // document.getElementById("loggedGuesses").textContent=loggedGuesses
    // document.getElementById("wins").textContent=wins
    // document.getElementById("losses").textContent=losses
    // document.getElementById("guess").textContent=guess

