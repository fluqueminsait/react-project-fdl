import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AnimatedLetters from "../../components/AnimatedLetters/AnimatedLetters";
import "./Home.scss";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const hubGame = [
    "H",
    "U",
    "B",
    " ",
    "D",
    "E",
    " ",
    "J",
    "U",
    "E",
    "G",
    "O",
    "S",
  ];
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);


  return (
    <>
      <div className="home-container">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={hubGame}
            idx={1}
          />
        </h1>
        <h3>BIENVENIDO</h3>
        <h4> ELEGI TU JUEGO </h4>
        <p>
          <Link to="/tateti">TA TE TI</Link>
        </p>
        <p>
          <Link to="/hangman">HANGMAN</Link>
        </p>
        <p onClick={() => alert("ESTE JUEGO ESTA BAJO CONSTRUCCION")}>
          {" "}
          SUDOKU{" "}
        </p>
      </div>
    </>
  );
};

export default Home;
