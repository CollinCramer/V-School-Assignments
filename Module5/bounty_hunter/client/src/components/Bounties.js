import React from "react";

export default function Bounties(props) {
    console.log(props)
    const { firstname, lastname, totalbounty, _id } = props
    return(
        <div className="bounty">
            <h1>{firstname} { lastname }</h1>
            <h3>{ totalbounty } credits</h3>
        </div>
    )
}