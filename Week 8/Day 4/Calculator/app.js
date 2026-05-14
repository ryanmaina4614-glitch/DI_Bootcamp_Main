import { useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("+");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const number1 = Number(num1);
    const number2 = Number(num2);

    let answer;

    switch (operation) {
      case "+":
        answer = number1 + number2;
        break;

      case "-":
        answer = number1 - number2;
        break;

      case "*":
        answer = number1 * number2;
        break;

      case "/":
        answer =
          number2 !== 0
            ? number1 / number2
            : "Cannot divide by zero";
        break;

      default:
        answer = 0;
    }

    setResult(answer);
  };

  return (
    <div className="container">
      <div className="calculator">
        <h1>Universal Calculator</h1>

        <input
          type="number"
          placeholder="Enter first number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />

        <select
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
        >
          <option value="+">Addition (+)</option>
          <option value="-">Subtraction (-)</option>
          <option value="*">Multiplication (*)</option>
          <option value="/">Division (/)</option>
        </select>

        <button onClick={calculate}>
          Add Them
        </button>

        <h2>Result: {result}</h2>
      </div>
    </div>
  );
}

export default App;