import React, { useState } from 'react';
import './App.css'

const TicTacToeTask = () => {

    const [board,setBoard]=useState(Array(9).fill(null));
    const [isXTurn,setIsXTurn]=useState(true);

  return (
    <div>TicTacToeTask
        <div className='cont'>
            <div className='cont-items' onClick={handleClick(1)} id='1'></div>
            <div className='cont-items' id='2'></div>
            <div className='cont-items' id='3'></div>
            <div className='cont-items' id='4'></div>
            <div className='cont-items' id='5'></div>
            <div className='cont-items' id='6'></div>
            <div className='cont-items' id='7'></div>
            <div className='cont-items' id='8'></div>
            <div className='cont-items' id='9'></div>
        </div>
    </div>
  )
}

export default TicTacToeTask