import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

export default function Footer() {

    const {color} = useContext(ThemeContext)

    return (
        <div>
            <div className="footer--button--container">
                <button className={`footer--button`}>Change Theme</button>
            </div>
            <div className={`${color}--footer`}></div>
        </div>
    )
}