import { createContext, useState, useEffect, type ReactNode } from "react";

export const DarkModeContext = createContext({
  darkMode: false,
  setDarkMode: (value: boolean) => {},
});

const DarkModeContextProvider = ({ children }: { children: ReactNode }) => {

  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true";
  });

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode ? "true" : "false");
  }, [darkMode]);

  return (
    <DarkModeContext.Provider
      value={{
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContextProvider;
