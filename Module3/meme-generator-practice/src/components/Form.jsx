import React from "react";
import memesData from "../memesData";

export default function Form () {
    // const [memeImage, setMemeImage] = React.useState("")
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    
    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
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
                <img src={meme.randomImage}
                className="meme--image"></img>
            </div>
        </main>
    )
}