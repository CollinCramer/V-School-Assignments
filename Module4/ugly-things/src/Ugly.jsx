import React from "react";

export default function Ugly(props) {

    return (
        <div className="ugly--container">
            <img src={props.imgUrl}></img>
            <div className="ugly--info">
                <h4>{props.title}</h4>
                <h4>{props.description}</h4>
            </div>
            <div className="ugly--editContainer">
                <form>
                    <input type="text" placeholder="Edit Title"></input>
                    <input type="text" placeholder="Edit Description"></input>
                    <button type="button">Submit Changes</button>
                    <button type="button">Remove Ugly Thing</button>
                </form>
            </div>
        </div>
    )
}