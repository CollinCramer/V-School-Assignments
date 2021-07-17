import React from "react"


function Pet(props) {
   console.log(props)
    return (
        <div>
            <h2>Name: {props.name}</h2>
            <h4>Breed: {props.breed}</h4>
            
        </div>
    )
}

export default Pet