import { useState, useEffect } from 'react'
import axios from 'axios'
import Bounties from './components/Bounties'
import AddBountyForm from './components/AddBountyForm'

export default function App() {

    const [bounties, setBounties] = useState([])
    

    // get request (ALL)
    function getBounties() {
        axios.get("/api/bounty")
            .then(res => setBounties(res.data))
            .catch(err => console.log(err.response.data.errMsg))
    }

    // Post Request (FORM)
    function addBounty(newBounty) {
        axios.post("/api/bounty", newBounty)
            .then(res => {
                setBounties(prevBounties => [...prevBounties, res.data])
            })
            .catch(err => console.log(err))
    }

    // Delete request (button on each bounty)
    function deleteBounty(bountyId){
        axios.delete(`/api/bounty/${bountyId}`)
            .then(res => {
                setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
            })
            .catch(err => console.log(err))
    }

    // Edit request called onSubmit (button on each bounty which is conditionally rendered)
    function editBounty(updates, bountyId){
        axios.put(`/api/bounty/${bountyId}`, updates)
        // console.log works. changing to make state update
        .then(res => {
            setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data))
        })
        .catch(err => console.log(err))
    }

    // handlefilter
    function handleFilter(e) {
        if(e.target.value === "reset"){
            getBounties()
        } else {
        axios.get(`/api/bounty/search/type?type=${e.target.value}`)
            .then(res => setBounties(res.data))
            .catch(err => console.log(err))
        }
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
                <h4>All Bounties</h4>
                <select onChange={handleFilter} className='filter--form'>
                    <option value="reset">Select a Faction</option>
                    <option value="jedi">Jedi</option>
                    <option value="sith">Sith</option>
                    <option value="unaligned">Unaligned</option>



                </select>
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