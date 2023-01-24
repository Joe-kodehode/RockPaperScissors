import { useState } from "react";
import "./App.css";

function App() {
  const possibilities = ["Rock", "Paper", "Scissors"];
  const [result, setResult] = useState("");
  let [score, setScore] = useState(0);
  const [playerPick, setPlayerPick] = useState();
  const [compPick, setCompPick] = useState();

  const determineWinner = (userAnswer) => {
    let aiAnswer = possibilities[Math.floor(Math.random() * 3)];
    setCompPick(aiAnswer);
    console.log("AI picked:  " + aiAnswer);
    if (userAnswer === aiAnswer) {
      setResult("Draw");
    } else if (userAnswer === "Rock" && aiAnswer === "Scissors") {
      setPlayerPick("Rock");
      setResult("Win");
      setScore((score += 1));
    } else if (userAnswer === "Scissors" && aiAnswer === "Paper") {
      setPlayerPick("Scissors");
      setResult("Win");
      setScore((score += 1));
    } else if (userAnswer === "Paper" && aiAnswer === "Rock") {
      setPlayerPick("Paper");
      setResult("Win");
      setScore((score += 1));
    } else if (userAnswer === "Scissors" && aiAnswer === "Rock") {
      setPlayerPick("Scissors");
      setResult("Loss");
      setScore((score -= 1));
    } else if (userAnswer === "Paper" && aiAnswer === "Scissors") {
      setPlayerPick("Paper");
      setResult("Loss");
      setScore((score -= 1));
    } else if (userAnswer === "Rock" && aiAnswer === "Paper") {
      setPlayerPick("Rock");
      setResult("Loss");
      setScore((score -= 1));
    }
    console.log("player picked:  " + playerPick);
  };
  console.log("result:  " + result);
  console.log("score:  " + score);

  const UserButton = (props) => {
    return <button onClick={determineWinner(props.name)}>{props.name}</button>;
  };

  return (
    <>
      <UserButton name="Rock" />
      <UserButton name="Paper" />
      <UserButton name="Scissors" />

      <p id="score-board">Score: {score}</p>
      <p>You picked: {playerPick}</p>
      <p>AI Picked: {compPick}</p>
      <p>{result === "win" ? "You won" : "You lost"}</p>
    </>
  );
}

export default App;
