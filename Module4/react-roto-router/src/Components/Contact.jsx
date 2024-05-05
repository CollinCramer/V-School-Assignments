import React from "react";
import {useNavigate} from 'react-router-dom';

export default function Contact() {

    const navigate = useNavigate();

    return (
        <div className="component">
            <h2 className="component--title">Contact Us</h2>
            <ul className="contact--list">
                <li className="contact">Phone: 801-000-0000</li>
                <li className="contact">email: rotorouterplumbing@gmail.com</li>
                <li className="contact">twitter: @rotorouterplumbing</li>
            </ul>
            {/* list to navigate to other pages */}
            <ul>
                <li><button onClick={() => navigate("/")}>Home</button></li>
                
                <li><button onClick={() => navigate("/about")}>About</button></li>
            </ul>
        </div>
    )

}