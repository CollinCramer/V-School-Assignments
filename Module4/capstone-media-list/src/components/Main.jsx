import React, { useContext } from "react";
import {useNavigate} from 'react-router-dom';
import { ThemeContext } from "../ThemeContext";

export default function Main() {

    const navigate =  useNavigate()
    const {color} = useContext(ThemeContext)

    return (
        <div className={`${color}--main`}>
            <h3 className={`${color}--main--text`}>Welcome! Click the buttons to see Top 20's</h3>
            <div className={`${color}--button--container`}>
                <button type="button" className={`${color}--buttons`} onClick={() => navigate("/tv")}>Get Highest Rated TV Shows</button>
                <button type="button" className={`${color}--buttons`} onClick={() => navigate("/movies")}>Get Highest Rated Movies</button>
            </div>
            <div className={`${color}--button--container--two`}>
                <button type="button" className={`${color}--buttons`} onClick={() => navigate("/tv/popular")}>Get Most Popular TV Shows</button>
                <button type="button" className={`${color}--buttons`} onClick={() => navigate("/movies/popular")}>Get Most Popular Movies</button>
            </div>
            
        </div>
    )
}