import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function AddMediaForm(props) {

    const [authors, setAuthors] = useState([])

    function getAuthors() {
        axios.get("/api/authors")
            .then(res => setAuthors(res.data))
            .catch(err => console.log(err.response.data.errMsg))
    }

    useEffect(() => {
        getAuthors()
    },[])


    const initInputs = { 
        name: props.name || "",
        releaseYear: props.releaseYear || 0,
        completed: props.completed || true,
        img: props.img || "",
        authorId: props.authorId || "",
        rating: props.rating || 0}
        
        const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
        console.log(inputs)
    }

    function handleSubmit(e) {
        e.preventDefault()
        // post request
        props.submit(inputs, props._id)
        setInputs(initInputs)
        console.log(e)
    }
    return(
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            name="name" 
            value={inputs.name} 
            onChange={handleChange} 
            placeholder='Name'
            />
            <input 
            type="number" 
            name="releaseYear" 
            value={inputs.releaseYear} 
            onChange={handleChange} 
            placeholder='Release Year'
            />
            <input 
            type="text" 
            name="img" 
            value={inputs.img} 
            onChange={handleChange} 
            placeholder='Image Link'
            />
            <input 
            type="number" 
            name="rating" 
            value={inputs.rating} 
            onChange={handleChange} 
            placeholder='score'
            />
            <select
            type="select" 
            name="authorId" 
            value={inputs.authorId} 
            onChange={handleChange} 
            placeholder='author'
            >
                {authors.map(author => 
                <option
                    value={author._id}
    
                >
                    {author.name}
                </option>
                )}
            </select>
            <fieldset>
                <legend>Completion Status</legend>
                
                <input 
                    type="radio"
                    id="completed"
                    name="completed"
                    value="true"
                    onChange={handleChange}
                />
                <label htmlFor="completed">Completed</label>
                <br />
                
                <input 
                    type="radio"
                    id="not completed"
                    name="completed"
                    value="false"
                    onChange={handleChange}
                />
                <label htmlFor="Not Completed">Not Completed</label>
                <br />
                
            </fieldset>
            <button>{ props.btnText }</button>
            
        </form>
    )
}