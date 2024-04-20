import { useState } from 'react'
import Routes from "./config/router";
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './config/theme';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Space Mono';
    src: url("./fonts/Space_Mono/SpaceMono-Regular.ttf") format("truetype");
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

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    if(theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <button onClick={toggleTheme}>Basculer le thème</button>
      <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </>
  )
}

export default App;
