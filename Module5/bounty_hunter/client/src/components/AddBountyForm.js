import React, { useState } from 'react'

export default function AddBountyForm(props) {
    const initInputs = { 
        firstname: props.firstname || "",
        lastname: props.lastname || "",
        living: props.living || true,
        totalbounty: props.totalbounty || 0,
        type: props.type || "sith"}
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
    }
    return(
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            name="firstname" 
            value={inputs.firstname} 
            onChange={handleChange} 
            placeholder='Firstname'
            />
            <input 
            type="text" 
            name="lastname" 
            value={inputs.lastname} 
            onChange={handleChange} 
            placeholder='Lastname'
            />
            <input 
            type="number" 
            name="totalbounty" 
            value={inputs.totalbounty} 
            onChange={handleChange} 
            placeholder='Total Bounty'
            />
            <fieldset>
                <legend>Current Faction Status</legend>
                
                <input 
                    type="radio"
                    id="unaligned"
                    name="type"
                    value="unaligned"
                    onChange={handleChange}
                />
                <label htmlFor="unaligned">Unaligned</label>
                <br />
                
                <input 
                    type="radio"
                    id="sith"
                    name="type"
                    value="sith"
                    onChange={handleChange}
                />
                <label htmlFor="sith">Sith</label>
                <br />
                
                <input 
                    type="radio"
                    id="jedi"
                    name="type"
                    value="jedi"
                    onChange={handleChange}
                />
                <label htmlFor="jedi">Jedi</label>
                <br />
                
            </fieldset>
            <button>{ props.btnText }</button>
            
        </form>
    )
}