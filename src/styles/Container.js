import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 900px;
  width: 600px;
  min-width: 320px;
  margin: 0 auto;
  box-sizing: border-box;
  background-color: #fff;
  color: var(--main-color);
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  overflow-y: auto;

  @media (max-width: 768px) {
    width: 100%; /* 모바일 화면에서는 100%로 확장 */
    height: 90vh;
  }
`;

export default Container;
