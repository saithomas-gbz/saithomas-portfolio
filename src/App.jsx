import { useState, useEffect } from 'react';
import AppRoutes from "./config/router";
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './config/theme';
import { GlobalStyle } from './shared/GlobalStyle';
import { ButtonContainer, ThemeButton } from './shared/Button';
import { TbSun, TbMoon } from "react-icons/tb";

function App() {
  const [theme, setTheme] = useState('dark');
  const [showButton, setShowButton] = useState(false);

  const toggleTheme = () => {
    if(theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        {showButton && (
          <ButtonContainer>
            <ThemeButton onClick={toggleTheme}>
              {theme === "light" ? <TbMoon size={24} /> : <TbSun size={24} />}
            </ThemeButton>
          </ButtonContainer>
        )}
        <GlobalStyle />
        <AppRoutes />
      </ThemeProvider>
    </>
  );
}

export default App;