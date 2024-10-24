import React, { createContext, useState, useEffect } from "react";

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  function getDarkModeSettingFromLocalStorage() {
    // Attempt to retrieve the darkMode value from local storage
    const darkModeSettingFromLocalStorage =
      window.localStorage.getItem("darkMode");

    // Check if the value exists and is a valid JSON string
    if (darkModeSettingFromLocalStorage !== null) {
      try {
        return JSON.parse(darkModeSettingFromLocalStorage);
      } catch (error) {
        console.error("Error parsing dark mode setting:", error);
        return false; // Fallback to default value
      }
    }

    return false; // Default value
  }

  function toggleTheme() {
    setDarkMode((d) => !d);
  }

  const [darkMode, setDarkMode] = useState(
    getDarkModeSettingFromLocalStorage()
  );

  useEffect(() => {
    // Set in LocalStorage
    window.localStorage.setItem("darkMode", JSON.stringify(darkMode));

    if (darkMode == true) {
      document.getElementById("body-element").classList.add("app-dark");
      document.getElementById("html-element").classList.add("app-dark");

      document.getElementById("body-element").classList.remove("app-light");
      document.getElementById("html-element").classList.remove("app-light");
    } else {
      document.getElementById("body-element").classList.add("app-light");
      document.getElementById("html-element").classList.add("app-light");

      document.getElementById("body-element").classList.remove("app-dark");
      document.getElementById("html-element").classList.remove("app-dark");
    }
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </DarkModeContext.Provider>
  );
};
