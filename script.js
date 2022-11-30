let playerWins = 0;
let computerWins = 0;

const getComputerChoice = () => {
  let random = Math.floor(Math.random() * 3 + 1);

  switch (random) {
    case 1:
      return "rock";
      break;
    case 2:
      return "paper";
      break;
    case 3:
      return "scissors";
      break;
    default:
      return "Uh-oh. Something went wrong. Try again.";
  }
};

const playRound = (playerSelection, computerSelection) => {
  switch (playerSelection) {
    case "rock":
      switch (computerSelection) {
        case "rock":
          return "It's a tie.";
          break;
        case "paper":
          computerWins++;
          return "You Lose! Paper beats Rock.";
          break;
        case "scissors":
          playerWins++;
          return "You Win! Rock beats Scissors.";
          break;
      }
    case "paper":
      switch (computerSelection) {
        case "rock":
          playerWins++;
          return "You Win! Paper beats Rock.";
          break;
        case "paper":
          return "It's a tie.";
          break;
        case "scissors":
          computerWins++;
          return "You Lose! Scissors beats Paper.";
          break;
      }
    case "scissors":
      switch (computerSelection) {
        case "rock":
          computerWins++;
          return "You Lose! Rock beats Scissors.";
          break;
        case "paper":
          playerWins++;
          return "You Win! Scissors beats Paper.";
          break;
        case "scissors":
          return "It's a tie.";
          break;
      }
    default:
      return "Something went wrong. Try again.";
      break;
  }
};

const game = () => {
  let playerSelection;

  for (let i = 0; i < 5; i++) {
    playerSelection = prompt(
      "Choose a weapon: rock, paper, or scissors."
    ).toLowerCase();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }

  if (playerWins > computerWins) {
    console.log("You Win!");
  }
  if (computerWins > playerWins) {
    console.log("Computer Wins!");
  } else {
    console.log("It's a tie.");
  }
};

game();
