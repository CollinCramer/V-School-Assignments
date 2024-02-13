import React from "react";

export default function Friend(props) {
    return (
        <div className="friend">
            <h1 className="name">{props.name}</h1>
            <h2 className="age">Age: {props.age}</h2>
        </div>
    )

}