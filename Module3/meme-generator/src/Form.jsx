import React from "react";

export default function Form() {

    const [randMeme, setRandMeme] = React.useState({
        topText:"",
        bottomText:"",
        randomImage:""
    })
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

        submittedValue.push(toBeSubmitted)

        setSubmittedMemes(submittedValue)

    }
    // function createRandomMeme() {
    //     submittedMemes.map(() => {
    //         <div>
    //             <img>{submittedMemes.url}</img>
    //             <h4>{submittedMemes.topText}</h4>
    //             <h4>{submittedMemes.bottomText}</h4>
    //             <button>Delete Meme</button>
    //         </div>
    //     })
    // }
    // button to delete random meme from the list


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
                <button type="button" className="form--button" onClick={submitToList}>Save Your Meme!</button>
            </form>
            <div className="meme--container">
                <button className="form--button" onClick={randomClick}>Get New Meme Image!</button>
                <div className="meme">
                    <img className="meme--image" src={randMeme.randomImage}></img>
                    <h4>{randMeme.topText}</h4>
                    <h4>{randMeme.bottomText}</h4>
                </div>
            </div>
            <ol>
                {submittedMemes.map((element) => {
                    return (
                    <div>
                      <img src={element.randomImage}></img>
                      <h4>{element.topText}</h4>
                      <h4>{element.bottomText}</h4>
                      <button>Delete Meme</button>
                 </div>
                    )

                })}
            </ol>
        </main>
    )
}