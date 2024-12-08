import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');

  :root {
    --main-color : #f95252;
    --gray-color : #787878;
    --darkgray-color : #383838;
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
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
  }
`;

export default GlobalStyle;
