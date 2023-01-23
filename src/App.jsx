import { useState } from "react";

import "./App.css";

const rockAnswer = document.querySelector("#rock-btn");
const scissorsAnswer = document.querySelector("#scissors-btn");
const paperAnswer = document.querySelector("#paper-btn");

function App() {
  const possibilities = ["Rock", "Paper", "Scissors"];
  const [result, setResult] = useState("");
  let [score, setScore] = useState(0);

  // Function for finding the winner, called when user chooses a button
  const determineWinner = (userAnswer) => {
    let aiAnswer = possibilities[Math.floor(Math.random() * 3)];

    // Logic for deciding winner/loser and returning "win" or "loss"
    if (userAnswer === aiAnswer) {
      result = "Draw";
    } else if (
      (userAnswer === "Rock" && aiAnswer === "Scissors") ||
      (userAnswer === "Scissors" && aiAnswer === "Paper") ||
      (userAnswer === "Paper" && aiAnswer === "Rock")
    ) {
      result = "Win";
      setScore(score++);
    } else {
      result = "Loss";
      setScore(score--);
    }
  };

  return (
    <>
      <button className="btn" onClick={() => determineWinner("Rock")}>
        Rock
      </button>
      <button className="btn" onClick={() => determineWinner("Paper")}>
        Paper
      </button>
      <button className="btn" onClick={() => determineWinner("Scissors")}>
        Scissors
      </button>
    </>
  );
}

export default App;
