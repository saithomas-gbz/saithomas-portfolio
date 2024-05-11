import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../../config/theme';
import { ButtonContainer, ThemeButton } from '../../shared/Button';
import { TbSun, TbMoon } from "react-icons/tb";

export const ThemeSwitcher = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const [showButton, setShowButton] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      {showButton && (
        <ButtonContainer>
          <ThemeButton onClick={toggleTheme}>
            {theme === "light" ? <TbMoon size={24} /> : <TbSun size={24} />}
          </ThemeButton>
        </ButtonContainer>
      )}
      {children}
    </ThemeProvider>
  );
}