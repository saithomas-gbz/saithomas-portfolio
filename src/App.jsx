import { useState } from 'react'
import Routes from "./config/router";
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './config/theme';
import { GlobalStyle } from './shared/GlobalStyle';

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
