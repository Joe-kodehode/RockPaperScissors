import styled from "styled-components";

export default styled.button`
  height: 194px;
  width: 194px;
  border-radius: 50%;
  border: 21.56px solid ${(props) => props.color};
  box-shadow: #0000003c inset 0 6px 0 3px, 0px 6px ${(props) => props.bgColor};
  background: #d9d9d9;
  cursor: pointer;

  ${({ result }) => (result ? "transform: scale(1.5);" : "")}
  ${({ result }) => (result ? "margin: calc(194px/4);" : "")}


  /* The default image is too small for the project, scaling it up here */
  & img {
    transform: scale(1.3);
  }
`;
