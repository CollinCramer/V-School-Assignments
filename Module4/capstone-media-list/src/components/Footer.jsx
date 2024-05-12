import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

export default function Footer() {

    const {color, toggleTheme } = useContext(ThemeContext)

    return (
        <div className="footer--container">
            <div className="footer--button--container">
                <button className={`footer--button`} onClick={toggleTheme}>Change Theme</button>
            </div>
            <div className={`${color}--footer`}></div>
        </div>
    )
}