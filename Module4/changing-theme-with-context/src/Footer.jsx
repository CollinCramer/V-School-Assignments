import React, { useContext } from "react";
import { ThemeContext } from "./themeContext";


export default function Footer(props) {

    // const {color} = useContext(ThemeContext)
    const {color} = useContext(ThemeContext)

    return (
        <div className={`${color}--footer`}>
            <h1>Footer test</h1>
        </div>
    )
} 