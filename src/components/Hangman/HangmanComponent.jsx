import "./HangmanComponent.scss";
import React from "react";
import { useState, useEffect } from "react";
import BtnGame from "../BtnGame/BtnGame";

const WORDS = [
  "MANZANA",
  "PERA",
  "FRESA",
  "CHOCOLATE",
  "VAINILLA",
  "QUESO",
  "OTORRINOLARINGOLOGO",
];
let randomWord = WORDS[Math.floor(Math.random() * WORDS.length)];
const LETTERSALPH = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const HangmanComponent = () => {
  const [wrongLetters, setWrongLetters] = useState([]);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [att, setAtt] = useState(5);
  const [btnGame, setBtnGame] = useState(false);

  const guessWord = randomWord
    .split("")
    .map((letter) => (correctLetters.includes(letter) ? letter : "_ "))
    .join("");

  useEffect(() => {
    attempts();
    validateWin();
  }, [wrongLetters, correctLetters]);

  const checkLetter = (lette) => {
    if (correctLetters.includes(lette)) {
      alert("YA ACERTASTE ESTA LETRA");
    } else if (randomWord.includes(lette)) {
      setCorrectLetters([...correctLetters, lette]);
    } else if (!randomWord.includes(lette) && !wrongLetters.includes(lette)) {
      setAtt(att - 1);
      setWrongLetters([...wrongLetters, lette]);
    } else if (wrongLetters.includes(lette)) {
      alert("YA INTENTASTE CON ESTA LETRA");
    }
  };

  const attempts = () => {
    if (wrongLetters.length === 5) {
      alert("Perdiste Alpiste");
      setCorrectLetters([]);
      setWrongLetters([]);
      setAtt(5);
      const randomNumber = Math.floor(Math.random() * WORDS.length);
      randomWord = WORDS[randomNumber];
    }
  };

  const validateWin = () => {
    if (randomWord === guessWord) {
      setTimeout(() => {
        alert("ganaste");
        setCorrectLetters([]);
        setWrongLetters([]);
        setAtt(5);
      }, 500);

      const randomNumber = Math.floor(Math.random() * WORDS.length);
      randomWord = WORDS[randomNumber];
    }
  };

  const game = () => {
    if (!btnGame) {
      setBtnGame(true);
      setCorrectLetters([]);
        setWrongLetters([]);
        setAtt(5);
        const randomNumber = Math.floor(Math.random() * WORDS.length);
      randomWord = WORDS[randomNumber];
    } else {
      setBtnGame(false);
    }
  };

  return (
    <div className="hangman-container">
      <h2>HANGMAN</h2>
      <BtnGame btnGame={btnGame} game={()=>game()}/>
      {!btnGame ? "" : <div className="prueba">
      <div className="hangman-container__wordGuess">
        <div className="hangman-container__wordGuess__secretWord"> TE QUEDAN {att} INTENTOS</div>
        <p>{guessWord}</p>
      </div>
      <div className="hangman-container__btnWrapper">
        {LETTERSALPH.map((btnLetter, index) => {
          return (
            <button className="hangman-container__btnWrapper_button" key={index} onClick={() => checkLetter(btnLetter)}>
              {btnLetter}
            </button>
          );
        })}
      </div>
      <div className="hangman-container__wrongLetters">
        <p>WRONG LETTERS</p>
        {wrongLetters.map((wrongL, index) => {
          return <span key={index}> {wrongL}</span>;
        })}
      </div>
      </div>}
    </div>
  );
};

export default HangmanComponent;
