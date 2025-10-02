let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");

let generateComputerChoice = () => {
  let options = ["stone", "paper", "scissors"];
  let randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};
let msg = document.getElementById("msg");

let draw = () => {
  console.log("game draw");
  msg.innerText = "Game Draw";
  msg.style.background = "rgba(255, 255, 0, 1);";
  msg.style.boxShadow = "0px 0px 15px 3px rgba(0, 140, 255, 1)";
};
let win = () => {
  userScore++;
  document.getElementById("user-score").innerText = userScore;
  msg.innerText = "You Win";
  msg.style.background = "green";
  msg.style.boxShadow = "0px 0px 15px 4px green";
};
let lose = () => {
  compScore++;
  document.getElementById("comp-score").innerText = compScore;
  msg.innerText = "Computer Win";
  msg.style.background = "red";
  msg.style.boxShadow = "0px 0px 15px 4px red";
};

let playGame = (userChoice) => {
  console.log("user Choice = ", userChoice);
  let compChoice = generateComputerChoice();
  console.log("comp Choice = ", compChoice);

  if (userChoice == compChoice) {
    draw();
  } else {
    switch (userChoice) {
      case "stone":
        compChoice === "scissors" ? win() : lose();
        break;
      case "paper":
        compChoice === "stone" ? win() : lose();
        break;
      case "scissors":
        compChoice === "paper" ? win() : lose();
        break;
    }
  }
};

choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
