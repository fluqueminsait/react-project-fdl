import "./Square.scss";
import React from 'react'

const Square = ({value, chooseSquare}) => {
  return (
    <div className="square" onClick={chooseSquare}>
      {value}
    </div>
  )
}

export default Square