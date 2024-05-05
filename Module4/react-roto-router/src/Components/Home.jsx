import React from "react";
import {useNavigate} from 'react-router-dom';

export default function Home() {

    const navigate = useNavigate();

    return (
        <div className="component">
            <h2 className="component--title">Best Plumbing Service Around!</h2>
            <p className="component--text">Leaky Pipes? Toilet Clogged? Just call us for help! We are cheaper than the dumber plumbers!</p>
            {/* list to navigate to other pages */}
            <ul>
                <li><button onClick = {() => navigate("/about")}>About</button></li>
                
                <li><button onClick={() => navigate("/contact")}>Contact Us!</button></li>
            </ul>
        </div>
    )

}