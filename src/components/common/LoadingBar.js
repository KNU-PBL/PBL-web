import styled from "styled-components";

const LoadingBar = styled.div`
  width: 70%;
  height: 4px;
  margin: auto;
  background-color: white;
  animation: loading 1s infinite;

  @keyframes loading {
    0% {
      transform: scaleX(0);
      transform-origin: left;
    }
    100% {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`;

export default LoadingBar;
