import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Logo } from "./components/Logo";
import { Navlink } from "./components/NavLinks";

function App() {
  const nav_links = ["Services", "Projects", "About"];
  return (
    <div className="App">
      <nav>
        <Logo logo="LOGOBAKERY" />
        <div className="nav_links">
          <Navlink links={nav_links} />
        </div>
        <Button button="Contact" />
      </nav>
    </div>
  );
}

export default App;
