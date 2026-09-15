import { FiMoon, FiSun } from "react-icons/fi";

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${
        theme === "light" ? "dark" : "light"
      } mode`}
    >
      <span className="theme-toggle-icon">
        {theme === "light" ? <FiMoon /> : <FiSun />}
      </span>
    </button>
  );
}

export default ThemeToggle;