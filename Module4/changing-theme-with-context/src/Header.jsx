import React, { useContext } from "react";
import { ThemeContext } from "./themeContext";

export default function Header (props) {

    const {color} = useContext(ThemeContext)

    return (
        <div className={`${color}--header`}>
            <h1>Theme Context Practice</h1>
        </div>
    )
}