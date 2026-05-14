import { useState } from "react";
import quotes from "./QuotesDatabase";
import "./App.css";

function App() {
  const colors = [
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#BDBB99",
    "#77B1A9",
    "#73A857"
  ];

  const randomIndex = Math.floor(Math.random() * quotes.length);

  const [quote, setQuote] = useState(quotes[randomIndex]);
  const [bgColor, setBgColor] = useState(colors[0]);
  const [lastIndex, setLastIndex] = useState(randomIndex);

  const generateQuote = () => {
    let newIndex;

    // Prevent same quote from appearing twice
    do {
      newIndex = Math.floor(Math.random() * quotes.length);
    } while (newIndex === lastIndex);

    const randomColor =
      colors[Math.floor(Math.random() * colors.length)];

    setQuote(quotes[newIndex]);
    setLastIndex(newIndex);
    setBgColor(randomColor);
  };

  return (
    <div
      className="app"
      style={{ backgroundColor: bgColor }}
    >
      <div className="quote-box">
        <h1 style={{ color: bgColor }}>
          "{quote.quote}"
        </h1>

        <p style={{ color: bgColor }}>
          - {quote.author || "Unknown"}
        </p>

        <button
          onClick={generateQuote}
          style={{ backgroundColor: bgColor }}
        >
          New Quote
        </button>
      </div>
    </div>
  );
}

export default App;