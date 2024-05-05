import React from "react";
import { Link } from "react-router-dom";

export default function Header() {

    return (
    <div className="header">
        <ul className="list--container">
            <Link to = "/" className = "link">
                <li className="list">Home</li>
            </Link>
            <Link to = "/about" className="link">
                <li className="list">About</li>
            </Link>
            <Link to = "/contact" className="link">
                <li className="list">Contact Us</li>
            </Link>
        </ul>
        <h1>
            React Roto Router
        </h1>
    </div>
    )
}