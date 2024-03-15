import React from "react";
import Die from "./Die";
import { useState } from "react"

export default function DiceBox (props) {
    const [numbers, setNumbers] = useState([{value:null, isClicked:false},{value:null, isClicked:false},{value:null, isClicked:false},{value:null, isClicked:false},{value:null, isClicked:false},{value:null, isClicked:false}])
    function getRandomNumber() {
        return Math.floor(Math.random() * 6) + 1;
  }

    function randomDice() {
        setNumbers(numbers.map((number) => {
            if (number.isClicked === false)
            return {value:getRandomNumber(), isClicked:false}
            else {
                return number
            }
        }))
  }


    function keepDie(index) {
        setNumbers(numbers.map((number, idx) => {
            return {value:number.value, isClicked:idx === index}
        }))
        
    }

    const dice =numbers.map((die, index) => 
    {
    return (<div className="dice--box"
        onClick={() => {
            keepDie(index)
        }}>
        <Die number={die.value}/>
    </div> 
    )
    }
    )
    return (
    <div>
        {dice}
        <button className='roll--dice' onClick={randomDice}>roll dice</button>
    </div>
    )
}