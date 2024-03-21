import React from "react";
import Dj from "./Dj";
import { useState } from 'react';

export default function Squares () {
    const [squares, setSquares] = React.useState(Dj)

    const squareElements = squares.map(square => (
        <div style={{backgroundColor: `${square.backgroundColor}`}} className="box" key={square.id}></div>
    ))
    function smallTime() {
    //    if first square black, change all white
    // 1. check background color of first square
        const firstSquare = squares[0]
        const squareBackground = firstSquare.backgroundColor
    // if square is black, change all to white
        if (squareBackground === "black") {
            // create a new array of squares with background color as white
            const squaresWhite = squares.map(square => {
                return {
                    ...square, 
                    backgroundColor:"white"
                }
            })
            // call set squares with new array
            setSquares(squaresWhite)
            return 
        }
        // if first square is not black, change all to black
        const squaresBlack = squares.map(square => {
        return {
                ...square, 
                backgroundColor:"black"
            }
        })
        // call set squares with new array
        setSquares(squaresBlack)
    }
   function partyDj() {
    // change the first two squares purple
    // map to create a new array
    const squaresPurple = squares.map((square, index)=>{
        // determine what index we are
        // make a variable called backgroundColor
        let backgroundColor = square.backgroundColor
        // if index is 0 or 1, set backgroundColor to purple
        if(index === 0 || index === 1) {
            backgroundColor = "purple"
        }
        // else set background color to the squares background color
        return {
            ...square,
            backgroundColor:backgroundColor
        }
    })
    // spread in square properties
    // change background color of index 0 and 1 to purple
    // set squares to our new array
    setSquares(squaresPurple)
   }
    return (
        <div>
            {squareElements}
            <div className="buttons--container">
                <button onClick={smallTime}>Small Time DJ</button>
                <button onClick={partyDj}>Party DJ</button>
                <button>Professional DJ</button>
                <button>Big Time 1</button>
                <button>Big Time 2</button>
                <button>Big Time 3</button>
                <button>Big Time 4</button>
                <button>Sound!</button>
            </div>
        </div>
    )
}