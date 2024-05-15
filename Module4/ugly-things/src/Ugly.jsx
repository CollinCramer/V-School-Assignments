import React, { useContext, useState } from "react";
import { AppContext } from "./AppContext";


export default function Ugly(props) {
    // setting a state to store edit information
    const [edittedThing, setEdittedThing] = useState({
        title:"",
        description:"",
        imgUrl:"",
    })

    const {handleEdit} = useContext(AppContext)

    function editUgly(event) {
        event.preventDefault()
        console.log(edittedThing)
        handleEdit({
            title: edittedThing.title,
            description: edittedThing.description,
            _id: props._id,
        })
    }

    // handleChange to submit to edittedThings state
    function handleChange(event) {
        const {name, value} = event.target
        setEdittedThing(prevUgly => ({
            ...prevUgly,
            [name]: value
        }))
    }

    return (
        <div className="ugly--container">
            <img src={props.imgUrl}></img>
            <div className="ugly--info">
                <h4>{props.title}</h4>
                <h4>{props.description}</h4>
            </div>
            <div className="ugly--editContainer">
                <form>
                    <input type="text" name="title" value={edittedThing.title} placeholder="Edit Title" onChange={handleChange}></input>
                    <input type="text" name="description" value={edittedThing.description} placeholder="Edit Description" onChange={handleChange}></input>
                    <button type="button" onClick={editUgly}>Submit Changes</button>
                    <button type="button" onClick={() => props.handleDelete(props._id)}>Remove Ugly Thing</button>
                </form>
            </div>
        </div>
    )
}