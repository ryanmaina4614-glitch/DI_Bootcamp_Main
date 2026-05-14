import React, {
  createContext,
  useContext,
  useState,
  useRef,
} from "react";

/* =========================
   EXERCISE 1 : THEME SWITCHER
========================= */

// Create Context
const ThemeContext = createContext();

// Theme Provider
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  // Toggle Theme
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Theme Switcher Component
function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} style={{ padding: "10px" }}>
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}

// Themed Content Component
function ThemedContent() {
  const { theme } = useContext(ThemeContext);

  const styles = {
    backgroundColor: theme === "light" ? "#ffffff" : "#222222",
    color: theme === "light" ? "#000000" : "#ffffff",
    padding: "20px",
    marginTop: "20px",
    borderRadius: "10px",
  };

  return (
    <div style={styles}>
      <h2>{theme.toUpperCase()} THEME</h2>
      <p>This content changes according to the selected theme.</p>
    </div>
  );
}

/* =========================
   EXERCISE 2 : CHARACTER COUNTER
========================= */

function CharacterCounter() {
  const inputRef = useRef(null);

  const [count, setCount] = useState(0);

  // Handle Input Change
  const handleInput = () => {
    setCount(inputRef.current.value.length);
  };

  return (
    <div style={{ marginTop: "40px" }}>
      <h2>Character Counter</h2>

      <input
        type="text"
        ref={inputRef}
        onInput={handleInput}
        placeholder="Type something..."
        style={{
          padding: "10px",
          width: "300px",
        }}
      />

      <h3>Character Count: {count}</h3>
    </div>
  );
}

/* =========================
   MAIN APP
========================= */

function App() {
  return (
    <ThemeProvider>
      <div
        style={{
          fontFamily: "Arial",
          padding: "30px",
        }}
      >
        <h1>React Hooks Exercises</h1>

        {/* Exercise 1 */}
        <ThemeSwitcher />
        <ThemedContent />

        {/* Exercise 2 */}
        <CharacterCounter />
      </div>
    </ThemeProvider>
  );
}

export default App;