import { ReactNode, createContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import '../styles/Layout.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const ThemeContext = createContext('light');

const Layout = ({ children, isLogged, setIsLogged }: { children: ReactNode, isLogged: boolean, setIsLogged: any }) => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState('light');
  const [showButton, setShowButton] = useState(false)

  // const toggleTheme = () => {
  //   setTheme(theme === 'light' ? 'dark' : 'light');
  // };

  const removeSession = () => {
    sessionStorage.removeItem('user_id')
    setIsLogged(false)
    navigate('/')
  }

  return (
    <ThemeContext.Provider value={theme}>
      <nav>
        <Link to="/" className='text-blue-400 text-center'>Mi app</Link>
        {isLogged &&
          <div>
            <Link to='/cart'>
              {window.screen.width > 768 && <span className="text-blue-400 text-center mx-1">Carrito</span>}
              <FontAwesomeIcon icon={faCartShopping} color="#5686E1" />
            </Link>
            <button className="close-session" onClick={removeSession}>Cerrar sesion</button>
          </div>
        }
      </nav>
      <div id={theme}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export default Layout