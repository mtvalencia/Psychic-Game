    // Creates an array that lists out all of the options.
    var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    // Creating variables to hold the number of wins, losses, and guesses left.
    var wins = 0;
    var losses = 0;
    var guessesLeft = 10;
    var userChoice = [];

    // Create variables that hold references to the places in the HTML where we want to display things.
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var guessesLeftText = document.getElementById("guessesLeft-text");
    var userChoiceText = document.getElementById("userchoice-text");

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

      // Determines which key was pressed.
      var userGuess = event.key;

      // Randomly chooses a choice from the options array. This is the Computer's guess.
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

      //Game over when guessesLeft is 0.
      if(guessesLeft === 0){
        alert("The game is over. Thanks for playing!");
        alert("Press F5 to play again");
      } 

      //Add user guess to the userChoice array
      if ((userGuess.search(/[a-z]/g) === 0) && (guessesLeft != -1)) {
        userChoice.push(userGuess);
        guessesLeft--;
      } 

      // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
      if  ((userGuess.search(/[a-z]/g) === 0) && (guessesLeft != -1)) {

        if (userGuess === computerGuess) {
          wins++;
        } else {
          losses++;
        }
        console.log("I chose letter: " + userGuess);
        console.log("The cpu chose letter: " + computerGuess);
        // // Display the user and computer guesses, and wins/losses/ties.
        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
        userChoiceText.textContent = "Your guesses so far: " + userChoice;
      }
    };