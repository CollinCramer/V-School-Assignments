import React from "react";
import { Link } from "react-router-dom";

export default function Header() {

    return (
    <div className="header">
        <nav className="list--container">
            <Link to = "/" className = "link">
                Home   /
            </Link>
            <Link to = "/about" className="link">
                About   /
            </Link>
            <Link to = "/contact" className="link">
                Contact Us   /
            </Link>
        </nav>
        <h1>
            React Roto Router
        </h1>
    </div>
    )
}