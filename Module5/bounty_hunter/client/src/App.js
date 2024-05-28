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


    useEffect(() => {
        getBounties()
    },[])

    return (
        <div>
            <div className='bounty--container'>
                <AddBountyForm 
                    addBounty = {addBounty}
                />
                {bounties.map(bounty => <Bounties {...bounty} key={bounty.name}/>)}
            </div>
        </div>
    )
}