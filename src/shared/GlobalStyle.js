import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  
  @font-face {
    font-family: 'Space Mono';
    src: url('./fonts/Space_Mono/SpaceMono-Bold.ttf') format('truetype');
    font-weight: bold;
  }

  @font-face {
    font-family: 'Space Mono';
    src: url('./fonts/Space_Mono/SpaceMono-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Space Mono';
    src: url('./fonts/Space_Mono/SpaceMono-Italic.ttf') format('truetype');
    font-weight: normal;
    font-style: italic;
  }

  
  
  body {
    margin: 0;
    padding: 0;
    width: 33.33%;
    height: 100vh;
    display: flex; 
    justify-content: center;
    position: relative;
    left: 33.33%;
    font-family: 'Space Mono', monospace;
    background-color: ${props => props.theme.bgcolor};

    @media (max-width: 768px) {
      width: 100%;
      left: 0;
    }
  }



`;