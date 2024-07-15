import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/theme/default"
import { GlobalStyles } from "./styles/globalstyles"
import { Router } from "./routes/router"


function App() {


  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Router />
      </ThemeProvider>
    </BrowserRouter >
  )
}

export default App
