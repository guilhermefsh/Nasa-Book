import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/theme/default"
import { GlobalStyles } from "./styles/globalstyles"
import { Router } from "./routes/router"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { BookProvider } from "./contexts/BookContext"

function App() {
  return (
    <BrowserRouter basename="/Nasa-Book">
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <BookProvider>
          <ToastContainer />
          <Router />
        </BookProvider>
      </ThemeProvider>
    </BrowserRouter >
  )
}

export default App
