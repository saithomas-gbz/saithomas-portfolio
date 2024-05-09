import { useState } from 'react'
import Routes from "./config/router";
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './config/theme';
import { GlobalStyle } from './shared/GlobalStyle';
import { ButtonContainer, ThemeButton } from './shared/Button';
import { TbSun } from "react-icons/tb";

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
      <ButtonContainer>
        <ThemeButton onClick={toggleTheme}><TbSun size={24}/></ThemeButton>
      </ButtonContainer>
      <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </>
  )
}

export default App;
