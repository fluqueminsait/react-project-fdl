import "./Board.scss";
import React from "react";
import { useState, useEffect } from "react";
import Square from "../Square/Square.jsx";
import BtnGame from "../BtnGame/BtnGame";

const Board = () => {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [turn, setTurn] = useState("X");
  const [before, setBefore] = useState();
  const [result, setResult] = useState({ winner: "none", state: "none" });
  const [btnGame, setBtnGame] = useState(false);
  const PATTERNS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  useEffect(() => {
    validator();
    validateTie();
    if (turn === "X" && before === turn) {
      setTurn("O");
    } else if (turn === "O" && before === turn) {
      setTurn("X");
    }
  }, [board]);

  useEffect(() => {
    if (result.state !== "none") {
      alert(`Game Finished! Winning Player: ${result.winner}`);
      restartGame();
    }
  }, [result]);

  const game = () => {
    if (!btnGame) {
      setBtnGame(true);
      restartGame();
    } else {
      setBtnGame(false);
      restartGame();
    }
  };

  const createSquares = (array) =>
    array.map((item) => (
      <Square
        key={item}
        value={board[item]}
        chooseSquare={() => {
          chooseSquare(item);
        }}
      />
    ));

  const chooseSquare = (square) => {
    setBoard(
      board.map((item, index) => {
        if (index === square && item === "") {
          setBefore(turn);
          return turn;
        }
        return item;
      })
    );
  };

  const validator = () => {
    PATTERNS.forEach((singlePattern) => {
      const currentPlayer = board[singlePattern[0]];
      if (currentPlayer === "") return;
      let winningPattern = true;
      singlePattern.forEach((number) => {
        if (board[number] !== currentPlayer) {
          winningPattern = false;
        }
      });
      if (winningPattern) {
        setTimeout(() => {
          setResult({ winner: turn, state: "WON" });
        }, 200);
      }
    });
  };

  const validateTie = () => {
    let itsTie = true;
    board.forEach((square) => {
      if (square === "") {
        itsTie = false;
      }
    });
    if (itsTie) {
      setResult({ winner: "Its a Tie", state: "Tie" });
    }
  };

  const restartGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setTurn("X");
    setBefore("O");
  };

  return (
    <div className="tictactoe-container">
      <h2>TA TE TI</h2>
      <BtnGame btnGame={btnGame} game={() => game()} />
      <p> {btnGame ? "Es el turno de la " + `${turn}` : ""}</p>
      {!btnGame ? (
        ""
      ) : (
        <div className="tictactoe-container__board">
          <div className="tictactoe-container__board__row">
            {createSquares([0, 1, 2])}
          </div>
          <div className="tictactoe-container__board__row">
            {createSquares([3, 4, 5])}
          </div>
          <div className="tictactoe-container__board__row">
            {createSquares([6, 7, 8])}
          </div>
        </div>
      )}
    </div>
  );
};

export default Board;
