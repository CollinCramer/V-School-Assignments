import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

export default function Footer() {

    const {color} = useContext(ThemeContext)

    return (
        <div className={`${color}--footer`}>
            
        </div>
    )
}