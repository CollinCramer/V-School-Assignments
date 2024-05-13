import React from "react";

export default function Tv(props) {
    return (
        <div className="cards">
            <div className="card">
                <h2>{props.original_name}</h2>
                <h3>{props.vote_average}</h3>
                <p>{props.overview}</p>
            </div>
        </div>
    )
}