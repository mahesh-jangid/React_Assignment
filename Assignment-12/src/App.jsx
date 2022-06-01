import React, { useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ThemeContext } from "./Context/ThemeContext";

function App() {
  const { theme, toggle, dark } = useContext(ThemeContext);

  return (
    <div className="App">
      <header
        className="App-header"
        style={{
          backgroundColor: theme.backgroundColor,
          color: theme.color,
        }}
      >
        <button
          type="button"
          onClick={toggle}
          style={{
            backgroundColor: theme.backgroundColor,
            color: theme.color,
            border: theme.border,
            outline: "none",
          }}
        >
          Toggle to {dark ? "Light" : "Dark"} theme
        </button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>

        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
