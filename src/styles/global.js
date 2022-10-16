import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html{
    font: 10px Roboto, sans-serif;
  }

  body, input, button {
      font-size: 1.6rem;
  }
  body{
    background-color: #b4b4b4;
  }

  #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px;
  }

  button {
    cursor: pointer;
  }
`;
export default GlobalStyles;
