import React from "react";
import { Button } from "react-bootstrap";

export const ResetButton = ({ onRestart }) => {
  return (
    <div className="d-flex justify-content-start">
      <Button onClick={onRestart} variant="outline-success" className="w-100">
        Restart Game
      </Button>
    </div>
  );
};
