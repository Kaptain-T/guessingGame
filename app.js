"use strict"
const userInputField = document.querySelector("#userNumber")
const messages = document.querySelector(".messages")
const play = document.querySelector("button")
const trialsLeft = document.querySelector(".trialsLeft")



let active = true
let computerNumber = Math.trunc(Math.random() * 100 + 1);
let chances = 3
trialsLeft.textContent = chances
function displaymessage(message) {
    messages.textContent = message
}

// WHEN USER CLICKS/TAPS PLAY
play.addEventListener("click", function(){
    let userInput = Number(userInputField.value);

    // IF ACTIVE IS TRUE AND IF INPUT FIELD IS NOT EMPTY
    if(active && !(userInput == "")){
        if (
          1 < userInput &&
          userInput < 100 &&
          Number.isInteger(userInput)
        ) {
          if (userInput > computerNumber && chances > 1) {
            displaymessage("Too high 📈");
            chances--;
            trialsLeft.textContent = chances;
          } else if (userInput < computerNumber && chances > 1) {
            displaymessage("Too low 📉");
            chances--;
            trialsLeft.textContent = chances;
          } else if ((chances = 1)) {
            trialsLeft.textContent = 0;
            document.querySelector("body").style.backgroundColor = "red";
            displaymessage("You lose!🚫 Click replay to try again!");
            active = false;
            document.querySelector(
              ".compDisplay"
            ).innerHTML = `It was ${computerNumber}`;
            document.querySelector(".trials").style.color = "white"
          } else {
            displaymessage("Correct! ✅");
            document.querySelector("body").style.backgroundColor = "yellow";
            document.querySelector(
              ".compDisplay"
            ).innerHTML = `It was ${computerNumber}`;
          }
        } else if (userInput >= 100 && Number.isInteger(userInput)) {
          displaymessage("Enter a value below 100 ❌");
        } else if (userInput <= 1 && Number.isInteger(userInput)) {
          displaymessage("Enter a value above 1 ❌");
        } else if (!Number.isInteger(userInput)) {
          displaymessage("Enter a whole number! ❌");
        }
    } else if(userInput == ""){
        displaymessage("Enter a whole number! ❌");
    }
})

// WHEN USER CLICKS/TAPS REPLAY
document.querySelector(".replay").addEventListener("click", function(){
    active = true
    displaymessage("Play to guess!")
    document.querySelector("body").style.backgroundColor = "#009687";
    computerNumber = Math.trunc(Math.random() * 100 + 1);
    chances = 3
    trialsLeft.textContent = 3
    document.querySelector(".trials").style.color = "black";
    document.querySelector(
      ".compDisplay"
    ).innerHTML = `<img src="./guess.jpg" alt="image" id="image">`;
})