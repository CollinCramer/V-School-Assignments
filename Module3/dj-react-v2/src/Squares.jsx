import React from "react";
import Dj from "./Dj";
import { useState } from 'react';

export default function Squares () {
    const [squares, setSquares] = React.useState(Dj)

    const squareElements = squares.map(square => (
        <div style={{backgroundColor: `${square.backgroundColor}`}} className="box" key={square.id}></div>
    ))
    // function smallTime() {
    //     if 
    // }
   
    return (
        <div>
            {squareElements}
            <div className="buttons--container">
                <button>Small Time DJ</button>
                <button>Party DJ</button>
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