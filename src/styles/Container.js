import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 768px;
  min-width: 320px;
  margin: 0 auto;
  box-sizing: border-box;
  background-color: #fff;
  color: var(--main-color);
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  overflow-y: auto;
`;

export default Container;
