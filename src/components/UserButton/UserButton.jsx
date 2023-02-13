import StyledButton from "./UserButton.style";
import rock from "../../images/icon-rock.svg";
import paper from "../../images/icon-paper.svg";
import scissors from "../../images/icon-scissors.svg";

export default (props) => {
  let selection;
  let color;

  if (props.name === "rock") {
    selection = rock;
    color = "red";
  } else if (props.name === "paper") {
    selection = paper;
    color = "blue";
  } else if (props.name === "scissors") {
    selection = scissors;
    color = "yellow";
  }

  return (
    <StyledButton onClick={props.onClick} color={color} large={props.large}>
      <img src={selection} alt="" />
    </StyledButton>
  );
};
