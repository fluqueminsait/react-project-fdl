import "./BtnGame.scss";
import React from "react";

const BtnGame = ({ btnGame, game }) => {
  return (
    <button onClick={game} className="btnGame-component">
      {!btnGame ? "Empezar Juego" : "Finalizar Juego"}
    </button>
  );
};

export default BtnGame;
