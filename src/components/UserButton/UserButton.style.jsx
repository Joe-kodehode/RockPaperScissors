import styled from "styled-components";

export default styled.button`
  background: transparent;
  border-radius: 50%;
  height: 194px;
  width: 194px;
  border: solid 21.56px ${(props) => props.color};
  cursor: pointer;

  ${(props) => (props.large ? "transform: scale(1.5);" : "")}

  & img {
  }
`;
