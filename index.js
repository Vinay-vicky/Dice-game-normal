function rollDice() {
    // Generate random numbers for the dice rolls
    var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6 
    var randomDiceImage1 = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
    var randomImageSource1 = "images/" + randomDiceImage1; //images/dice1.png - dice6.png
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomImageSource1);
  
    var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6
    var randomDiceImage2 = "dice" + randomNumber2 + ".png";
    var randomImageSource2 = "images/" + randomDiceImage2;
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", randomImageSource2);
  
    var randomNumber3 = Math.floor(Math.random() * 6) + 1; //1-6
    var randomDiceImage3 = "dice" + randomNumber3 + ".png";
    var randomImageSource3 = "images/" + randomDiceImage3;
    var image3 = document.querySelectorAll("img")[2];
    image3.setAttribute("src", randomImageSource3);
  
    // Determine the winner
    if (randomNumber1 === randomNumber2 && randomNumber2 === randomNumber3) {
      document.querySelector("h1").innerHTML = "It's a Draw!"; // All three players have the same number
    } 
    else if (randomNumber1 === randomNumber2 && randomNumber1 > randomNumber3) {
      document.querySelector("h1").innerHTML = "🚩 Vignesh & Praveen Win!";
    }
    else if (randomNumber1 === randomNumber3 && randomNumber1 > randomNumber2) {
      document.querySelector("h1").innerHTML = "🚩 Vignesh & Nithish Win!";
    }
    else if (randomNumber2 === randomNumber3 && randomNumber2 > randomNumber1) {
      document.querySelector("h1").innerHTML = "🚩 Praveen & Nithish Win!";
    }
    else if (randomNumber1 > randomNumber2 && randomNumber1 > randomNumber3) {
      document.querySelector("h1").innerHTML = "🚩 Vignesh Wins!";
    }
    else if (randomNumber2 > randomNumber1 && randomNumber2 > randomNumber3) {
      document.querySelector("h1").innerHTML = "🚩 Praveen Wins!";
    }
    else {
      document.querySelector("h1").innerHTML = "🚩 Nithish Wins!";
    }
  }
  