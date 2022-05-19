import React, { useState, useEffect } from "react";
import Board from "./Board";
import Winner from "./Winner";
import { ResetButton } from "./Reset";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const Game = () => {
  const [squares, setsquares] = useState(Array(9).fill(null));
  const [squrecontent, setsqurecontent] = useState(null);
  const [winner, setWinner] = useState(null);

  const squareHandleClick = (value) => {
    if (!winner && !squares[value]) {
      setsquares([
        ...squares.slice(0, value),
        squrecontent,
        ...squares.slice(++value),
      ]);
    } else return;
  };

  const handleRestart = () => {
    setWinner(null);
    setsquares(Array(9).fill(null));
  };

  useEffect(() => {
    calculateWinner([...squares]);
    swapCounter();
  }, [squares]);

  const swapCounter = () => {
    if (squrecontent === null) {
      setsqurecontent("X");
    } else if (squrecontent === "X") {
      setsqurecontent("O");
    } else {
      setsqurecontent("X");
    }
  };

  const calculateWinner = (grid) => {
    if (!winner) {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (grid[a] && grid[a] === grid[b] && grid[a] === grid[c]) {
          setWinner(`Winner is : ${grid[a]}`);
          break;
        }

        if (grid.every((value) => value !== null)) {
          setWinner(`Ooops!! It's  draw`);
        }
      }
    }
  };

  return (
    <div>
      <div className="game-container">
        <div>
          <Winner text={winner} />
          <div className="d-flex align-items-start justify-content-start mt-3">
            <Board grid={squares} gridUpdate={squareHandleClick} />
            <ResetButton onRestart={handleRestart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
