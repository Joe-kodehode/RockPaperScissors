import StyledButton from "./UserButton.style";
import rock from "../../images/icon-rock.svg";
import paper from "../../images/icon-paper.svg";
import scissors from "../../images/icon-scissors.svg";

export default (props) => {
  let selection;
  let color;
  let bgColor;

  if (props.name === "rock") {
    selection = rock;
    color = "hsl(349, 71%, 54%)";
    bgColor = "#9D1533";
  } else if (props.name === "paper") {
    selection = paper;
    color = "hsl(230, 89%, 63%)";
    bgColor = "#2B44C2";
  } else if (props.name === "scissors") {
    selection = scissors;
    color = "hsl(39, 87%, 51%)";
    bgColor = "#C76C1B";
  }

  return (
    <StyledButton
      onClick={props.onClick}
      color={color}
      bgColor={bgColor}
      result={props.result}
    >
      <img src={selection} alt="" />
    </StyledButton>
  );
};
