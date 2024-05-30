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
play.addEventListener("click", function(){
    let userInput = Number(userInputField.value);
    console.log(Number.isNaN(userInput))
    if (
      active &&
      !userInput == "" &&
      1 < userInput &&
      userInput < 100 &&
      Number.isInteger(userInput)
    ) {
      console.log(computerNumber);
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
        displaymessage("You lose!🚫 Cynthia is an olodo🤣");
        active = false;
        document.querySelector(
          ".compDisplay"
        ).innerHTML = `It was ${computerNumber}`;
      } else {
        displaymessage("Correct! ✅");
        document.querySelector("body").style.backgroundColor = "yellow";
        document.querySelector(
          ".compDisplay"
        ).innerHTML = `It was ${computerNumber}`;
      }
    } else if (active && userInput >= 100 && Number.isInteger(userInput)) {
      displaymessage("Enter a value below 100");
    } else if (active && userInput <= 1 && Number.isInteger(userInput)) {
      displaymessage("Enter a value above 1");
    } else if (!Number.isInteger(userInput)) {
      displaymessage("Enter a whole number!");
    }
})

document.querySelector(".replay").addEventListener("click", function(){
    displaymessage("Play to guess!")
    document.querySelector("body").style.backgroundColor = "#009687";
    computerNumber = Math.trunc(Math.random() * 100 + 1);
    chances = 3
    trialsLeft.textContent = 3

})