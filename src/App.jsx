
import { useState, createContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { MyRoutes } from '.'
import { Dark, Light } from "./index"

export const ThemeContext = createContext(null);

function App() {

  const [theme, setTheme] = useState("Light")
  const ThemeStyle = theme==="Light"?Light:Dark;

  return (
    <ThemeContext.Provider value={{setTheme, theme}}>
      <MyRoutes/>
    </ThemeContext.Provider>
  )
}

export default App
