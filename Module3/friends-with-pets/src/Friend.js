import React from "react"
import Pet from "./Pet"

function Friend(props) {
   console.log(props)
    return (
        <div style= {divstyle.exampleStyle}>
            <h1>{props.friend}</h1>
            <h3>{props.age}</h3>
            {props.pets.map(pet => <Pet name = {pet.name} breed = {pet.breed}/>)}
        </div>
    )
}

const divstyle = {
    exampleStyle: {
        backgroundColor: 'white',
        margin: 'auto',
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '1px solid #efefef',
        padding: '30px',
    }
}

export default Friend

