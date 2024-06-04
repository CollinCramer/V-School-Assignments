import React, { useState } from "react";
import AddMediaForm from "./AddMediaForm";

export default function Game(props) {
    console.log(props)
    

    const [toggle, setToggle] = useState(false)
    const { name, releaseyear, rating, _id, platform, img, developerId, deleteGame } = props

    return(
        <div className="game">
            { !toggle ?
            <>
                <h1>{name}</h1>
                <h3>{ releaseyear }</h3>
                <h3>{ rating }</h3>
                <h3>{ platform }</h3>
                <img src={`${img}`}/>


                {/* anonymous function for the onclick. I don't understand why we wouldnt just call deleteBounty. Ask for clarification */}
                <button className="delete--button" 
                onClick={() => props.deleteGame(_id)}>
                    Delete
                </button>
                <button onClick={() => setToggle(prevToggle => !prevToggle)}className="edit--button">
                    Edit
                </button>
            </>
            :
            <>
                <AddMediaForm 
                    name={name}
                    releaseyear = {releaseyear}
                    rating = {rating}
                    _id={_id}
                    img = {img}
                    developerId = {developerId}
                    btnText = "Submit Changes"
                    submit={props.editGame}
                />
                <button onClick={() => setToggle(prevToggle => !prevToggle)}className="edit--button">Cancel Edit</button>
            </>
            }
        </div>
    )
}