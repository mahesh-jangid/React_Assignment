import React from "react";
import "../App.css";

const Winner = ({ text }) => {
  return text ? (
    <div class="alert alert-success" role="alert">
      {text}
    </div>
  ) : null;
};

export default Winner;
