import React, { createContext, useContext } from "react";

type ThemeProviderState = {
  theme: "light";
  setTheme: (theme: "light") => void;
  toggleTheme: () => void;
};

const ThemeProviderContext = createContext<ThemeProviderState>({
  theme: "light",
  setTheme: () => {},
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProviderContext.Provider value={{ theme: "light", setTheme: () => {}, toggleTheme: () => {} }}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeProviderContext);
