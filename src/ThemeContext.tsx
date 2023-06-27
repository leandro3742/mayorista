import { ReactNode, createContext, useState } from 'react';

// Definimos los tipos de nuestros valores de contexto
type ThemeContextType = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

// Creamos el contexto
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Creamos un componente proveedor que envuelve a los componentes hijos
const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Función para cambiar el modo oscuro
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Creamos el valor del contexto
  const contextValue: ThemeContextType = {
    darkMode,
    toggleDarkMode,
  };

  return (
    <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
