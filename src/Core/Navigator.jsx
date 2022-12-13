import "./Navigator.scss";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navigator = () => {
  return (
    <div className="navigator-container">
      <Link to="/">
        <img src="./assets/fran.png" alt="Logo" />
      </Link>
      <ul>
        <li>
          <NavLink exact="true" activeclassname="active"  to="/">HOME</NavLink>
        </li>
        <li>
        <NavLink exact="true" activeclassname="active" to="/tateti">TA TE TI</NavLink>
        </li>
        <li>
        <NavLink exact="true" activeclassname="active"  to="/hangman">HANGMAN</NavLink>
        </li>
        <li>
        <p onClick={()=> alert("ESTE JUEGO ESTA BAJO CONSTRUCCION")}> SUDOKU </p>
        </li>
        <li>
        <NavLink exact="true" activeclassname="active"  to="/sudoku">SUDOKU DEMO</NavLink>
        </li>
        </ul>
    </div>
  );
};

export default Navigator;
