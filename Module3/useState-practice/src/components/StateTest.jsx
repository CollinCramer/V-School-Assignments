import React from "react";
import { useState } from "react";

export default function StateTest(){
    const [color, setColor] = useState("pink")
    function handleChangeColor() {
        let toggledColor = color === "pink"? "blue": "pink";
        setColor(toggledColor)
    }

    return (
        <h1 
        style={{color}}
        onClick={handleChangeColor}>hello world</h1>
    )
}