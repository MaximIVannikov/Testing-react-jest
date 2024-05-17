import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ defaultTheme = 'light', children }) => {
  const [theme, setTheme] = useState(defaultTheme);

  const toggleTheme = () =>
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
