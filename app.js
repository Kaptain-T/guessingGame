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
    if (active && 1 < userInputField.value && userInputField.value < 100) {
      console.log(computerNumber)
      let userInput = userInputField.value;
      if(userInput > computerNumber && chances > 1){
        displaymessage("Too high 📈")
        chances--
        trialsLeft.textContent = chances;
      } else if (userInput < computerNumber && chances > 1){
        displaymessage("Too low 📉")
        chances--
        trialsLeft.textContent = chances;
      } else if(chances = 1){
        trialsLeft.textContent = 0
        document.querySelector("body").style.backgroundColor = "red"
        displaymessage("Game Over. You lose!🚫")
      }
        else{
        displaymessage("Correct! ✅")
      }
    } else if (userInputField.value >= 100) {
      displaymessage("Enter a value below 100");
    } else if (userInputField.value <= 1) {
      displaymessage("Enter a value above 1");
    }
})

document.querySelector(".replay").addEventListener("click", function(){
    displaymessage("Play to guess!")
    document.querySelector("body").style.backgroundColor =
      "rgba(4, 4, 5, 0.767)";
      chances = 3
      trialsLeft.textContent = 3

})