import React from "react";
import memesData from "../memesData";

export default function Form () {
    const [memeImage, setMemeImage] = React.useState("")

    function getMemeImage () {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }
    
    return (
        <main>
            <div className="form">
                <input type="text"
                placeholder="top text"
                className="form--input" />
                <input type="text"
                placeholder="bottom text" 
                className="form--input"/>
                <button 
                className="form--button"
                onClick={getMemeImage}
                >
                Get a new meme image 🖼</button>
                <img src={memeImage}
                className="meme--image"></img>
            </div>
        </main>
    )
}