import "./App.css";

const rockAnswer = document.querySelector("#rock-btn");
const scissorsAnswer = document.querySelector("#scissors-btn");
const paperAnswer = document.querySelector("#paper-btn");

function App() {
  const possibilities = ["Rock", "Paper", "Scissors"];
  let winLossDraw = "";

  // Function for finding the winner, called when user chooses a button
  const victor = (userAnswer) => {
    let aiAnswer = possibilities[Math.floor(Math.random() * 3)];

    // Logic for deciding winner/loser and returning "win" or "loss"
    if (userAnswer === aiAnswer) {
      winLossDraw = "Draw";
    } else if (
      (userAnswer === "Rock" && aiAnswer === "Scissors") ||
      (userAnswer === "Scissors" && aiAnswer === "Paper") ||
      (userAnswer === "Paper" && aiAnswer === "Rock")
    ) {
      winLossDraw = "Win";
    } else {
      winLossDraw = "Loss";
    }
  };

  return (
    <>
      <button className="btn" onClick={() => victor("Rock")}>
        Rock
      </button>
      <button className="btn" onClick={() => victor("Paper")}>
        Paper
      </button>
      <button className="btn" onClick={() => victor("Scissors")}>
        Scissors
      </button>
    </>
  );
}

export default App;
