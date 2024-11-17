import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  max-width: 1200px;
  min-width: 768px;
  margin: 0;
  padding: 0 20px;
  box-sizing: border-box;
  background-color: #000;
  color: #fff;

  @media (max-width: 1024px) {
    max-width: 800px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    min-width: unset;
    padding: 0 15px;
  }
`;
export default Container;
