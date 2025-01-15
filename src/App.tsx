import { ThemeProvider } from "./context/themeContext"
import { PublicRoute } from "./routes/Routes"

function App() {
  return (
    <ThemeProvider>
      <PublicRoute />
    </ThemeProvider>
  )
}

export default App
