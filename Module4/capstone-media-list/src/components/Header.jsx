import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { Link } from "react-router-dom"

export default function Header() {

    const {color} = useContext(ThemeContext)

    return (
        <div className={`${color}--header`}>
            <div className={`${color}--header--text--container`}>
                <Link to = "/" className = "link">
                    Home   /
                </Link>
                <h1 className={`${color}--header--text`}>Media Archive</h1>
            </div>
        </div>
    )
}