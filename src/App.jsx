import AppRoutes from "./config/router";
import { GlobalStyle } from './shared/GlobalStyle';
import { ThemeSwitcher } from './components/ThemeSwitcher';

function App() {
  return (
    <ThemeSwitcher>
      <GlobalStyle />
      <AppRoutes />
    </ThemeSwitcher>
  );
}

export default App;