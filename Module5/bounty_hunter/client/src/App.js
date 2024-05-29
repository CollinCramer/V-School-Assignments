import { useState, useEffect } from 'react'
import axios from 'axios'
import Bounties from './components/Bounties'
import AddBountyForm from './components/AddBountyForm'

export default function App() {

    const [bounties, setBounties] = useState([])
    

    // get request (ALL)
    function getBounties() {
        axios.get("/bounty")
            .then(res => setBounties(res.data))
            .catch(err => console.log(err))
    }

    // Post Request (FORM)
    function addBounty(newBounty) {
        axios.post("/bounty", newBounty)
            .then(res => {
                setBounties(prevBounties => [...prevBounties, res.data])
            })
            .catch(err => console.log(err))
    }

    // Delete request (button on each bounty)
    function deleteBounty(bountyId){
        axios.delete(`/bounty/${bountyId}`)
            .then(res => {
                setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
            })
            .catch(err => console.log(err))
    }

    // Edit request called onSubmit (button on each bounty which is conditionally rendered)
    function editBounty(updates, bountyId){
        axios.put(`/bounty/${bountyId}`, updates)
        // console.log works. changing to make state update
        .then(res => {
            setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data))
        })
        .catch(err => console.log(err))
    }


    useEffect(() => {
        getBounties()
    },[])

    return (
        <div>
            <div className='bounty--container'>
                <AddBountyForm 
                    submit = {addBounty}
                    btnText = "Add Bounty"
                />
                {bounties.map(bounty => 
                <Bounties 
                    {...bounty}
                    key={bounty.name}
                    // passing down deleteBounty/editBounty as a prop
                    deleteBounty={deleteBounty}
                    editBounty={editBounty}
                />)}
            </div>
        </div>
    )
}