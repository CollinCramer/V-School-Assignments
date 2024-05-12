import React from "react";

export default function Movie(props) {
    return (
        <div className="cards">
            <div className="card">
                <h2>{props.original_title}</h2>
                <h3>{props.vote_average}</h3>
                <p>{props.overview}</p>
            </div>
        </div>
    )
}