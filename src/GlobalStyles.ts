import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  :root {
    --bg-color: rgb(18 18 20);
    --bg-color-medium: rgb(32, 32, 36);

    --text-color: rgb(225, 225, 230);
    --primary: rgb(130, 87, 229);
    --primary-light: rgb(168, 131, 255);
  }

  a {
    text-decoration: none;
  }

  .error {
    color: rgb(211, 66, 66);
    font-size: 1.4rem;
    display: inline-block;
    margin-top: 0.5rem;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
  }

  body {
    background-color: var(--bg-color);
    color: var(--text-color);
  }
`;
