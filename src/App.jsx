import { useState } from 'react'
import Routes from "./config/router";
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <>
      {/* <ThemeProvider> */}
        <Routes />
      {/* </ThemeProvider> */}
    </>
  )
}

export default App;
