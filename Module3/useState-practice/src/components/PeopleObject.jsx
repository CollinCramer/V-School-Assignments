import React from "react";
import Person from "./Person";
import { useState } from "react";

export default function PeopleObject() {
    const [people, setPeople] = useState([
        {
            firstName: "John",
            lastName: "Smith"
        }
    ])
    const renderPeople = people.map((person, index) =>
        <Person 
        key={index}
        firstName={person.firstName}
        lastName={person.lastName}
        />

    )
    function handleClick() {
        let newArray = [...people]
        newArray.push({firstName: "Collin", lastName: "Cramer"})
       setPeople(newArray)
    }
    console.log(people)
    return (
        <div>
            {renderPeople}
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}