import React, { useContext } from "react";
import {useNavigate} from 'react-router-dom';
import { ThemeContext } from "../ThemeContext";

export default function Main() {

    const navigate =  useNavigate()
    const {color} = useContext(ThemeContext)

    return (
        <div className={`${color}--main`}>
            <h3 className={`${color}--main--text`}>Welcome! Click the buttons to see Top 10's</h3>
            <div className={`${color}--button--container`}>
                <button type="button" className={`${color}--buttons`} onClick={() => navigate("/tv")}>Get Most Popular TV Shows</button>
                <button type="button" className={`${color}--buttons`} onClick={() => navigate("/movies")}>Get Most Popular Movies</button>
            </div>
        </div>
    )
}