// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

const rps = (p1, p2) => {
  if (
    (p1 === "scissors" && p2 === "paper") ||
    (p1 === "paper" && p2 === "rock") ||
    (p1 == "rock" && p2 === "scissors")
  ) {
    return "Player 1 won!";
  } else if (
    (p1 === "paper" && p2 === "scissors") ||
    (p1 === "scissors" && p2 === "rock") ||
    (p1 === "rock" && p2 === "paper")
  ) {
    return "Player 2 won!";
  } else if (p1 === p2) {
    return "Draw!";
  }
};

//test cases
console.log(rps("rock", "paper"));
console.log(rps("rock", "scissors"));
console.log(rps("rock", "rock"));
