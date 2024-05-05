import React from "react";
import {useNavigate} from 'react-router-dom';

export default function About() {

    const navigate = useNavigate();

    return (
        <div className="component">
            <h2 className="component--title">About Us</h2>
            <p className="component--text">Founded in 2024, the Roto ROuter plumbing team is the best around. We have a small, expertly trained team that is ready to help you
            with any issues you may have</p>
            {/* list to navigate to other pages */}
            <ul>
                <li><button onClick={() => navigate("/")}>Home</button></li>
                
                <li><button onClick={() => navigate("/contact")}>Contact Us!</button></li>
            </ul>
        </div>
    )

}