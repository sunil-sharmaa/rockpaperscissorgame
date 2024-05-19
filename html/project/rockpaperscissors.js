let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
let users = document.getElementById("user-score");
let comps = document.getElementById("comp-score");
let msg = document.getElementById("msg");

function compChoices() {
  const arr = ["rock", "paper", "scissor"];
  const randomdigit = Math.floor(Math.random() * 3);
  let comchoice = arr[randomdigit];
  return comchoice;
}

function winner(value) {
  if (value == true) {
    userScore++;
    users.innerText = userScore;
    msg.innerText = "USER WIN";
    msg.style.background = "green";
  } else {
    compScore++;
    comps.innerText = compScore;
    msg.innerText = "COMPUTER WIN";
    msg.style.background = "red";
  }
}

function playGame(userchoice) {
  let compchoice = compChoices();

  //   console.log(compchoice);
  //   console.log(userchoice);

  if (compchoice == userchoice) {
    msg.innerText = "DRAW GAME";
    msg.style.background = "black";
  } else {
    let userwin = true;
    if (compchoice === "scissor") {
      userwin = userchoice == "rock" ? true : false;
      // if(userchoice==="rock"){
      //     console.log("you won");
      //     userScore++;
      // }
      // else{
      //     console.log("computer won");
      //     compScore++;
      // }
    } else if (compchoice === "rock") {
      userwin = userchoice == "paper" ? true : false;
      // if(userchoice==="paper"){
      //     console.log("user win");
      //     userScore++;
      // }
      // else{
      //     console.log("computer win");
      //     compScore++;
      // }
    } else {
      userwin = userchoice == "scissor" ? true : false;
      // if(userchoice==="scissor"){
      //     console.log("user win");
      //     userScore++;
      // }
      // else{
      //     console.log("computer win");
      //     compScore++;
      // }
    }
    winner(userwin);
  }
}
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    // console.log(userchoice);
    playGame(userchoice);
  });
});
