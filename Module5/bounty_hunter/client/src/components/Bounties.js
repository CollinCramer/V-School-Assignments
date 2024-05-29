import React, { useState } from "react";
import AddBountyForm from "./AddBountyForm";

export default function Bounties(props) {
    console.log(props)
    // ask about "implement a conditional toggle using props in your handle submit". 
    const [toggle, setToggle] = useState()
    const { firstname, lastname, totalbounty, _id, editBounty, deleteBounty } = props
    return(
        <div className="bounty">
            { !toggle ?
            <>
                <h1>{firstname} { lastname }</h1>
                <h3>{ totalbounty } credits</h3>
                {/* anonymous function for the onclick. I don't understand why we wouldnt just call deleteBounty. Ask for clarification */}
                <button className="delete--button" 
                onClick={() => props.deleteBounty(_id)}>
                    Delete
                </button>
                <button onClick={() => setToggle(prevToggle => !prevToggle)}className="edit--button">
                    Edit
                </button>
            </>
            :
            <>
                <AddBountyForm 
                    firstname={firstname}
                    lastname={lastname}
                    totalbounty={totalbounty}
                    _id={_id}
                    btnText = "Submit Changes"
                    submit={props.editBounty}
                />
                <button onClick={() => setToggle(prevToggle => !prevToggle)}className="edit--button">Cancel Edit</button>
            </>
            }
        </div>
    )
}