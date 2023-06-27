import { ReactNode, createContext, useState } from "react"
import { Link } from "react-router-dom"
import '../styles/Layout.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const ThemeContext = createContext('light');

const Layout = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState('light');

  // const toggleTheme = () => {
  //   setTheme(theme === 'light' ? 'dark' : 'light');
  // };

  return (
    <ThemeContext.Provider value={theme}>
      <nav>
        <Link to="/" className='text-blue-400 text-center'>Mi app</Link>
        <Link to='/cart'><FontAwesomeIcon icon={faCartShopping} color="#5686E1" /></Link>
      </nav>
      <div id={theme}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export default Layout