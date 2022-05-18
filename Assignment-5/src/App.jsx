import React from "react";
import "./App.css";

import { PaymentCard } from "./components/PaymentCard";

function App() {
  const card1 = {
    date: "18 / 05 / 2022",
    logo: "https://merivis.org/wp-content/uploads/2018/02/Amazon-Logo-Transparent-PNG.png",
    heading: "Amazon Gift",
    subHeading: "Pay",
    device: "Desktop",
    color: "rgb(255, 205, 7)",
  };
  const card2 = {
    date: "30 / 08 / 2000",
    logo: "https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-icon-16.png",
    heading: "Apple Gift",
    subHeading: "Payment",
    device: "MacOS",
    color: "rgb(206, 203, 195)",
  };
  return (
    <div className="App">
      <header className="App-header">
        <PaymentCard {...card1} />
        <PaymentCard {...card2} />
      </header>
    </div>
  );
}

export default App;
