import { useState } from "react";
import "./App.css";

function App() {
  const possibilities = ["Rock", "Paper", "Scissors"];
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
      (userAnswer === "Rock" && aiAnswer === "Scissors") ||
      (userAnswer === "Scissors" && aiAnswer === "Paper") ||
      (userAnswer === "Paper" && aiAnswer === "Rock")
    ) {
      setResult("Win");
      setScore(score + 1);
    } else {
      setResult("Loss");
      setScore(score - 1);
    }
  };

  const UserButton = (props) => {
    return (
      <button onClick={() => determineWinner(props.name)}>{props.name}</button>
    );
  };

  return (
    <>
      <p id="score-board">Score: {score}</p>
      {newGame ? (
        <>
          <UserButton name="Rock" />
          <UserButton name="Paper" />
          <UserButton name="Scissors" />
        </>
      ) : (
        <>
          <p>You picked: {playerPick}</p>
          <p>AI Picked: {compPick}</p>
          <p>{result}</p>
          <button onClick={() => setNewGame(true)}>Play Again</button>
        </>
      )}
    </>
  );
}

export default App;
