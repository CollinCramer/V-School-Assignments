import React from "react";
import { useState } from "react";

export default function Meme (props) {

    const [toggle1, setToggle1] = React.useState(false)
    const [edittedMeme, setEdittedMeme] = React.useState({topText:"", bottomText:""})

    function deleteMeme() {
        props.handleDelete(props.id)
    }

    function editMeme(event) {
        event.preventDefault()
        props.handleEdit({
            id: props.id,
            topText: edittedMeme.topText,
            bottomText: edittedMeme.bottomText,
            randomImage: props.randomImage,
        })
    }
    function handleChange(event) {
        const {name, value} = event.target
        setEdittedMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    return (
        <div className="saved--memes">
                      <div className="meme">  
                        <div className="meme--container">
                            <img className="meme--image" src={props.randomImage}></img>
                            <h4 className="meme--text top">{props.topText}</h4>
                            <h4 className="meme--text bottom">{props.bottomText}</h4>
                        </div>
                      </div>
                      <div className="button-container">
                        <button className="delete" onClick={deleteMeme}>Delete Meme</button>
                        <button className="delete"
                        onClick={() => setToggle1((prev) => !prev)}
                        >Edit Meme</button>
                        {toggle1 && 
                            (<form>
                                <input placeholder="Top Text" onChange={handleChange} name="topText"/>
                                <input placeholder="Bottom Text" onChange={handleChange} name="bottomText"/>
                                <button
                                onClick={editMeme}
                                >Save</button>
                            </form>)}
                      </div>
                    </div>
    )
}