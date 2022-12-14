import "./HangmanComponent.scss";
import React from "react";
import { useState, useEffect } from "react";
import BtnGame from "../BtnGame/BtnGame";

const WORDS = [
  "MANZANA",
  "PERA",
  // "FRESA",
  // "CHOCOLATE",
  // "VAINILLA",
  // "QUESO",
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

  const saveWords = () => {
    localStorage.setItem("wordsArray", JSON.stringify(WORDS));
  };

  const prueba = JSON.parse(localStorage.getItem("wordsArray"));

  function guessWord() {
    if (WORDS.length === 0) {
      prueba.forEach((el) => {
        WORDS.push(el);
      });
      alert("HAS ADIVINADO TODAS LAS PALABRAS, SE REINICIA EL JUEGO");
      randomWord = WORDS[Math.floor(Math.random() * WORDS.length)];
    } else {
      return randomWord
        .split("")
        .map((letter) => (correctLetters.includes(letter) ? letter : "_ "))
        .join("");
    }
  }

  useEffect(() => {
    saveWords();
  }, []);

  useEffect(() => {
    validateWin();
    spliceWord();
    attempts();
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
      getRandomWord();
    }
  };

  const validateWin = () => {
    if (randomWord === guessWord()) {
      setTimeout(() => {
        alert("ADIVINASTE LA PALABRA, PREPARATE PARA LA SUGIENTE");
        setCorrectLetters([]);
        setWrongLetters([]);
        setAtt(5);
        getRandomWord();
      }, 500);
    }
  };

  const getRandomWord = () => {
    const randomNumber = Math.floor(Math.random() * WORDS.length);
    randomWord = WORDS[randomNumber];
  };

  const game = () => {
    if (!btnGame) {
      setBtnGame(true);
      setCorrectLetters([]);
      setWrongLetters([]);
      setAtt(5);
      getRandomWord();
    } else {
      setBtnGame(false);
    }
  };

  const spliceWord = () => {
    if (WORDS.length >= 1) {
      WORDS.forEach((word, idx) => {
        if (word === guessWord()) {
          WORDS.splice(idx, 1);
        }
      });
    }
  };

  return (
    <div className="hangman-container">
      <h2>HANGMAN</h2>
      <BtnGame btnGame={btnGame} game={() => game()} />
      {!btnGame ? (
        ""
      ) : (
        <div className="prueba">
          <div className="hangman-container__wordGuess">
            <div className="hangman-container__wordGuess__secretWord">
              TE QUEDAN {att} INTENTOS
            </div>
            <p>{guessWord()}</p>
          </div>
          <div className="hangman-container__btnWrapper">
            {LETTERSALPH.map((btnLetter, index) => {
              return (
                <button
                  className="hangman-container__btnWrapper_button"
                  key={index}
                  onClick={() => checkLetter(btnLetter)}
                >
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
        </div>
      )}
    </div>
  );
};

export default HangmanComponent;
