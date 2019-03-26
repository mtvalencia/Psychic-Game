    // Creates an array that lists out all of the city options.
    var cityChoices = ['SAN FRANCISCO', 'SAN JOSE', 'MIAMI', 'NEW YORK'];
    var userGuesses = [];

    // Creating variables to hold the number of wins, guesses, and remaining guesses. The wins start at 0 and rguesses start at 6.
    var wins = 0;
    var guesses = 0;
    var rGuesses = 6;

    // Create variables that hold references to the places in the HTML where we want to display things.
    var directionsText = document.getElementById("directions-text");
    var userGuessesText = document.getElementById("userGuesses-text");
    var rGuessesText = document.getElementById("rGuesses-text");
    var winsText = document.getElementById("wins-text");

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {


      // Determines which key was pressed.
      var userGuess = event.key;

      // userGuesses.push(userGuess); 
      console.log(userGuess);
      userGuesses.push(userGuess); 
      console.log(userGuesses);

      // Randomly chooses a choice from the options array. This is the Computer's guess.
      var computerGuess = cityChoices[Math.floor(Math.random() * cityChoices.length)];
      console.log("Computer chose " + computerGuess);

      // Split computer city choice into characters.
      var chars = computerGuess.split('');  
      var s = computerGuess;
      for (var i = 0; i < s.length; i++) {
          console.log(s.charAt(i));
      }


      //Display characters like _ _ _ _.



      // Reworked our code from last step to use "else if" instead of lots of if statements.



      // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number



        // Hide the directions
        // directionsText.textContent = "";



        // Display the user and computer guesses, and wins/losses/ties.

        // rGuessesTex.textContent = "Remaining choices: ";
        // winsText.textContent = "Wins: " + wins;
        // userGuessesText.textContent = "You chose: " + userGuesses;

    
  };