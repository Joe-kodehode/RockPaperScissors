import { useState } from "react";
import "./App.css";
import UserButton from "./components/UserButton";

function App() {
  const possibilities = ["rock", "paper", "scissors"];
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0);
  const [playerPick, setPlayerPick] = useState();
  const [compPick, setCompPick] = useState();
  const [newGame, setNewGame] = useState(true);

  const determineWinner = (userAnswer) => {
    let aiAnswer = possibilities[Math.floor(Math.random() * 3)];
    setCompPick(aiAnswer);
    setPlayerPick(userAnswer);
    setNewGame(false);

    if (userAnswer === aiAnswer) {
      setResult("Draw");
    } else if (
      (userAnswer === "rock" && aiAnswer === "scissors") ||
      (userAnswer === "scissors" && aiAnswer === "paper") ||
      (userAnswer === "paper" && aiAnswer === "rock")
    ) {
      setResult("Win");
      setScore(score + 1);
    } else {
      setResult("Loss");
      setScore(score - 1);
    }
  };

  return (
    <>
      <div className="scoreboard">
        <div className="title bold">
          <p>ROCK,</p>
          <p>PAPER,</p>
          <p>SCISSORS</p>
          {/* <p>ROCK,</p>
          <p>PAPER,</p>
          <p>SCISSORS</p> */}
        </div>

        <div className="score-container">
          <p className="semi-bold score-text">SCORE</p>
          <p className="score score-text bold">{score}</p>
        </div>
      </div>
      {newGame ? (
        <>
          <div className="player-selection">
            <UserButton onClick={() => determineWinner("rock")} name="rock" />
            <UserButton onClick={() => determineWinner("paper")} name="paper" />
            <UserButton
              onClick={() => determineWinner("scissors")}
              name="scissors"
            />
          </div>
        </>
      ) : (
        <div className="results">
          <div className="result">
            <p>You picked:</p>
            <UserButton name={playerPick} result></UserButton>
          </div>
          <div>
            <p>{result}</p>
            <button onClick={() => setNewGame(true)}>Play Again</button>
          </div>
          <div className="result">
            <p>AI Picked:</p>
            <UserButton name={compPick} result></UserButton>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
