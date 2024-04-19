import { useState } from 'react'
import Routes from "./config/router";
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 33.33%;
    height: 100vh;
    display: flex; 
    justify-content: center;
    position: relative;
    left: 33.33%;
    
  }
`;

function App() {
  return (
    <>
      {/* <ThemeProvider> */}
      {/* </ThemeProvider> */}
      <GlobalStyle />
        <Routes />
    </>
  )
}

export default App;
