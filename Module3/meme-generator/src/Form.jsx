import React from "react";
import { v4 as uuidv4 } from 'uuid';
import Meme from "./Meme";

export default function Form() {

    const [randMeme, setRandMeme] = React.useState({
        topText:"",
        bottomText:"",
        randomImage:"",
        id: "",
    })

    uuidv4();
    // console.log(uuidv4())
    // get random image data from API

    const [allMemes, setAllMemes] = React.useState([])

    const [submittedMemes, setSubmittedMemes] = React.useState([])




    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => { setAllMemes(data.data.memes)
        console.log(data)})
    
    }, [])
    React.useEffect(() => {
        if (allMemes.length > 0 ){
        randomMemeImage()
        }

    }, [allMemes])
    // set state as the random image
    function randomMemeImage() {
        //get a random number value
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        //random image called to give us a single URL
        const url = allMemes[randomNumber].url
        setRandMeme(prevMeme => ({ 
            ...prevMeme,
            randomImage: url
    
        }))

    }
    function handleChange(event) {
        const {name, value} = event.target
        setRandMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    console.log(allMemes, randMeme)

    // click button to get new random image
    function randomClick() {
        randomMemeImage()

    }
    // add created memes to a list,

    function submitToList() {
        const toBeSubmitted=randMeme

        const submittedValue=[...submittedMemes]

        submittedValue.push({...toBeSubmitted, id: uuidv4()})

        setSubmittedMemes(submittedValue)

        // console.log(submittedMemes)

    }
    // console.log(submittedMemes)

    function deleteMeme(id) {
        console.log()
        const editMemeList = submittedMemes.filter((meme) => {
            console.log(meme.id)
            if (meme.id === id) {
                return false
            }
            return true
           
        })
        setSubmittedMemes(editMemeList)
    }

    function editMeme(memeToEdit) {
        const edittedList = submittedMemes.map((meme) => {
            if (meme.id === memeToEdit.id) {
                // return the edited meme
                return memeToEdit
            }
            return meme
        })
        setSubmittedMemes(edittedList)
    }




    return (
        <main>
            <form className="form">
                <input className="form--input"
                name="topText"
                placeholder="Top Text"
                onChange={handleChange}
                >

                </input>
                <input className="form--input"
                name="bottomText"
                placeholder="Bottom Text"
                onChange={handleChange}
                >

                </input>
                <button type="button" className="form--button"  onClick={submitToList}>Save Your Meme!</button>
            </form>
            <div className="meme">
                <div className="meme--container">
                    <button className="form--button" onClick={randomClick}>Get New Meme Image!</button>
                    <div className="meme">
                        <img className="meme--image" src={randMeme.randomImage}></img>
                        <h4 className="meme--text top">{randMeme.topText}</h4>
                        <h4 className="meme--text bottom">{randMeme.bottomText}</h4>
                    </div>
                </div>
            </div>
            <ol>
                {/* mapping to create new list items from the submittedMemes array */}
                {submittedMemes.map((element) => {
                    return (
                        <Meme 
                            randomImage={element.randomImage}
                            topText={element.topText}
                            bottomText={element.bottomText}
                            id={element.id}
                            handleDelete={deleteMeme}
                            handleEdit={editMeme}
                        />
                    )

                })}
            </ol>
        </main>
    )
}