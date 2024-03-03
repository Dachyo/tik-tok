import React from 'react'
import './TicTacToe.css'
import circle_icon from '../Assents/circle.png'
import cross_icon from '../Assents/cross.png'
import { useState } from 'react'

let data = ["","","","","","","","","",""];

const TicTacToe = () => {


  let [count, setCount] = useState(0);

  const toggle = (w,num) => {

  }

  return (
    <div className='container'>
        <h1 className='title'> Tic Tac Toe Game <span>ХЭКСЛЕТ</span></h1>
        <div className="board">
          <div className="row1">
            <div className="boxes"></div>
            <div className="boxes"></div>
            <div className="boxes"></div>
          </div>
          <div className="row2">
            <div className="boxes"></div>
            <div className="boxes"></div>
            <div className="boxes"></div>
          </div>
          <div className="row3">
            <div className="boxes"></div>
            <div className="boxes"></div>
            <div className="boxes"></div>
          </div>
        </div>
        <button className="reset">Reset</button>
    </div>
  )
}

export {TicTacToe}
