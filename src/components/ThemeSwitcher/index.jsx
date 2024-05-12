import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../../config/theme';
import { ButtonContainer, ThemeButton } from '../../shared/Button';
import { IoMdSunny } from "react-icons/io";
import { FaMoon} from "react-icons/fa";

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
            {theme === "light" ? <FaMoon size={20} /> : <IoMdSunny size={20} />}
          </ThemeButton>
        </ButtonContainer>
      )}
      {children}
    </ThemeProvider>
  );
}