import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');

  :root {
    --main-color : #f95252;
    --gray-color : #787878;
    --darkgray-color : #383838;
    --background-color : #f2edea;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    line-height: 1.5;
    margin: 0;
    padding: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
  }

  @media (max-width: 768px) {
  body {
    align-items: start;
  }
}

  ::-webkit-scrollbar {
  width: 15px; /* 스크롤바의 너비 */
  height: 10px; /* 스크롤바의 높이 (수평 스크롤) */
  }

  /* 스크롤바 트랙 (배경) */
  ::-webkit-scrollbar-track {
    background: var(--gray-color);
    border-radius: 10px;
  }

  /* 스크롤바 핸들 (움직이는 부분) */
  ::-webkit-scrollbar-thumb {
    background: #c0c0c0; /* 핸들의 색상 */
    border-radius: 10px;
  }
`;

export default GlobalStyle;
