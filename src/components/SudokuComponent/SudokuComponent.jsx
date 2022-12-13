import "./SudokuComponent.scss"
import React, { useEffect, useState } from 'react'
import SudokuGame from 'sudoku-react-component';
import {  makepuzzle, solvepuzzle} from 'sudoku';

const SudokuComponent = () => {
   
    
  return (
   <div className="container">
   <SudokuGame></SudokuGame>
   </div>
  )
}

export default SudokuComponent