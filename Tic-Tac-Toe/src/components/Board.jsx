import React from "react";
import Square from "./Squares";
import { v4 as uuid } from "uuid";
import "../App.css";

const Board = ({ gridUpdate, grid }) => {
  return (
    <div className="board">
      {grid.map((value, index) => {
        return (
          <Square
            key={uuid()}
            value={value}
            onClick={() => gridUpdate(index)}
          />
        );
      })}
    </div>
  );
};

export default Board;
