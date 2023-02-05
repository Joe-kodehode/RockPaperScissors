import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import triangle from "./images/bg-triangle.svg";

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

  const StyledButton = styled.button`
    background: transparent;
    color: hsl(229 25% 31%);
    border-radius: 50%;
    height: 194px;
    width: 194px;
    border: solid 21.56px hsl(230 89% 65%);
    cursor: pointer;
  `;

  const UserButton = (props) => {
    return (
      <StyledButton onClick={() => determineWinner(props.name)}>
        {props.name}
      </StyledButton>
    );
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
            <UserButton name="Rock" />
            <UserButton name="Paper" />
            <UserButton name="Scissors" />
          </div>
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
