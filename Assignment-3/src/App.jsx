import { useState } from "react";
import "./App.css";
import styles from "./App.module.css";

function App() {
  const [counter, setCounter] = useState(0);

  const handle = (value) => {
    setCounter(counter + value);
  };
  return (
    <div className="App">
      <h2>Counter</h2>
      <p className={counter % 2 ? styles.red : styles.green}>{counter}</p>
      <button
        onClick={() => {
          handle(+1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          handle(-1);
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          setCounter(counter * 2);
        }}
      >
        Double
      </button>
    </div>
  );
}

export default App;
