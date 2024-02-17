import React from "react";
import Pet from "./Pet"


export default function Friend(props) {
    const pets = props.pets.map(pet => {
        return (
            <Pet 
            name={pet.name}
            breed={pet.breed}/>
        )
        
    })
    return (
        <div className="friend">
            <h1 className="name">{props.name}</h1>
            <h2 className="age">Age: {props.age}</h2>
            <div>{pets}</div>
        </div>
    )

}