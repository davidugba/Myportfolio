import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";


const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Apply theme to <body> and <html>
  const applyTheme = (mode) => {
    if (mode === "dark") {
      document.body.classList.add("dark");
      document.documentElement.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
      document.documentElement.classList.remove("dark");
    }
  };

  // On mount: check localStorage or system preference
  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) {
      setDarkMode(saved === "true");
      applyTheme(saved === "true" ? "dark" : "light");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDarkMode(prefersDark);
      applyTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  // Toggle theme and save preference
  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    applyTheme(newMode ? "dark" : "light");
    localStorage.setItem("darkMode", newMode);
  };

  return (
    <button
      className={`theme-toggle-modern${darkMode ? " dark" : ""}`}
      onClick={toggleTheme}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className="toggle-slider">
        <span className="icon sun">
          <FaSun />
        </span>
        <span className="icon moon">
          <FaMoon />
        </span>
        <span className="toggle-thumb" />
      </span>
    </button>
  );
};



export default ThemeToggle;