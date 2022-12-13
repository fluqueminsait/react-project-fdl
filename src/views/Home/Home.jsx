import React from 'react'
import { Link } from 'react-router-dom'
import './Home.scss'

const Home = () => {
  return (
    <div className='home-container'>
        <h3>BIENVENIDO</h3>
        <h4> ELEGI TU JUEGO </h4>
        <p><Link to="/tateti">TA TE TI</Link></p>
        <p><Link to="/hangman">HANGMAN</Link></p>
        <p onClick={()=> alert("ESTE JUEGO ESTA BAJO CONSTRUCCION")}> SUDOKU </p>
    </div>
  )
}

export default Home