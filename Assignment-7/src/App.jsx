import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Stopwatch } from "./components/Stopwatch";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Stopwatch />
      </header>
    </div>
  );
}

export default App;
