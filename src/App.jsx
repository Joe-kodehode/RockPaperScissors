import "./App.css";

const rockAnswer = document.querySelector("#rock-btn");
const scissorsAnswer = document.querySelector("#scissors-btn");
const paperAnswer = document.querySelector("#paper-btn");

function App() {
  possibilities = ["Rock", "Paper", "Scissors"];

  const victor = () => {
    let userAnswer = "";
    let aiAnswer = possibilities[Math.floor(Math.random() * 3)];

    if (userAnswer === aiAnswer) {
      return "Draw";
    }
    if (
      (userAnswer === "Rock" && aiAnswer === "Rock") ||
      (userAnswer === "Scissors" && aiAnswer === "Scissors") ||
      (userAnswer === "Paper" && aiAnswer === "Paper")
    ) {
      return "Win";
    } else {
      return "Loss";
    }
  };

  return <div className="App"></div>;
}

export default App;
