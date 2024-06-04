import React, { useState } from "react";
import AddBookForm from "./AddBookForm";

export default function Game(props) {
    console.log(props)
    
    const [toggle, setToggle] = useState()

    const { name, releaseyear, rating, _id, img, author, deleteBook, authorId } = props

    return(
        <div className="game">
            { !toggle ?
            <>
                <h1>{name}</h1>
                <h3>{ releaseyear }</h3>
                <h3>{ rating }</h3>
                <h3>{ author }</h3>
                <img src={`${img}`}/>


                {/* anonymous function for the onclick. I don't understand why we wouldnt just call deleteBounty. Ask for clarification */}
                <button className="delete--button" 
                onClick={() => props.deleteBook(_id)}>
                    Delete
                </button>
                <button onClick={() => setToggle(prevToggle => !prevToggle)}className="edit--button">
                    Edit
                </button>
            </>
            :
            <>
                <AddBookForm 
                    name={name}
                    releaseyear = {releaseyear}
                    rating = {rating}
                    _id={_id}
                    img = {img}
                    btnText = "Submit Changes"
                    submit={props.editBook}
                    authorId={authorId}
                />
                <button onClick={() => setToggle(prevToggle => !prevToggle)}className="edit--button">Cancel Edit</button>
            </>
            }
        </div>
    )
}