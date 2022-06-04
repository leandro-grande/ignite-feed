import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --background: #121214;

    --green: #00875F;
    --green-light: #00B37E;
    
    --cards: #202024;
    --divider: #323238;
    --placeholder: #7C7C8A;

    --text: #C4C4CC;
    --text-support: #8D8D99;
    --text-title: #E1E1E6;
    --white: #FFFFFF;

    --red: #F75A68;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background-color: var(--background);
    font-family: Roboto, sans-serif;    
  }

  p, span {
    color: var(--text);
  }

  h1, h2, h3 {
    color: var(--text-title);
    font-weight: 700;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  button {
    cursor: pointer;
  }

  a {
  color: inherit;
  text-decoration: none;
  }

  [disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }


`;