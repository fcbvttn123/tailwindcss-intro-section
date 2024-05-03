import { useState, useEffect, createContext } from 'react'
import { Header } from './components/Header'
import { Body } from './components/Body'

export const ThemeContext = createContext()

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <ThemeContext.Provider value={{windowWidth}}>
      <Header />
      <Body />
    </ThemeContext.Provider>
  )
}

export default App
