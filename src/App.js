import "./App.css";
import { useState } from "react";

function App() {
  const [initial, setInitial] = useState(0);
  const [text, setText] = useState("");

  function fizzBuzz(n) {
    if (n % 15 === 0) {
      return "FizzBuzz";
    } else if (n % 5 === 0) {
      return "buzz";
    } else if (n % 3 === 0) {
      return "fizz";
    } else {
      return n;
    }
  }

  const increaseNumber = () => {
    setInitial((initial) => initial + 1);
    fizzBuzz(initial);
    setText(fizzBuzz(initial));
  };
  const decreaseNumber = () => {
    setInitial((initial) => initial - 1);
    setText(fizzBuzz(initial));
  };

  return (
    <div className="App">
      <div>
        <h1>{text}</h1>
      </div>
      <button onClick={increaseNumber}>+</button>
      <button onClick={decreaseNumber}>-</button>
    </div>
  );
}

export default App;
