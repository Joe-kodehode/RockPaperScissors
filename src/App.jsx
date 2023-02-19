import { useState } from "react";
import "./App.css";
import UserSelectBtn from "./components/UserSelectButton";
import PlayAgainBtn from "./components/PlayAgainBtn";
import Pick from "./components/Pick";
import Result from "./components/Result";

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
      setResult("DRAW");
    } else if (
      (userAnswer === "rock" && aiAnswer === "scissors") ||
      (userAnswer === "scissors" && aiAnswer === "paper") ||
      (userAnswer === "paper" && aiAnswer === "rock")
    ) {
      setResult("WIN");
      setScore(score + 1);
    } else {
      setResult("LOSS");
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
        </div>

        <div className="score-container">
          <p className="semi-bold score-text">SCORE</p>
          <p className="score score-text bold">{score}</p>
        </div>
      </div>
      {newGame ? (
        <>
          <div className="player-selection">
            <UserSelectBtn
              onClick={() => determineWinner("rock")}
              name="rock"
            />
            <UserSelectBtn
              onClick={() => determineWinner("paper")}
              name="paper"
            />
            <UserSelectBtn
              onClick={() => determineWinner("scissors")}
              name="scissors"
            />
          </div>
        </>
      ) : (
        <div className="results">
          <div className="result">
            <Pick>YOU PICKED</Pick>
            <UserSelectBtn name={playerPick} result></UserSelectBtn>
          </div>
          <div className="play-again">
            <Result>{result}</Result>
            <PlayAgainBtn onClick={() => setNewGame(true)} />
          </div>
          <div className="result">
            <Pick>THE HOUSE PICKED</Pick>
            <UserSelectBtn name={compPick} result></UserSelectBtn>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
