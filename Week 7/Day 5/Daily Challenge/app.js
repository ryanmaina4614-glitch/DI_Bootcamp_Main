import React, { useState } from "react";

function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 },
  ]);

  // ✅ Increase votes
  const handleVote = (index) => {
    const updatedLanguages = languages.map((lang, i) => {
      if (i === index) {
        return { ...lang, votes: lang.votes + 1 };
      }
      return lang;
    });

    setLanguages(updatedLanguages);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Vote Your Language!</h1>

      {languages.map((lang, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "300px",
            margin: "10px auto",
            padding: "10px",
            border: "1px solid black",
            background: "#ffe9cc",
          }}
        >
          <span>{lang.votes}</span>
          <span>{lang.name}</span>

          <button
            onClick={() => handleVote(index)}
            style={{
              color: "green",
              fontSize: "16px",
              border: "none",
              background: "transparent",
              cursor: "pointer",
            }}
          >
            Click Here
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;