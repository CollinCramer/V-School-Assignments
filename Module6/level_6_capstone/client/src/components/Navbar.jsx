import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar(props){

const {logout} = props

    return(
        <div className = "one">
            <h1>Media Archive</h1>
            <div className='links'>
            <Link to="/profile" className = "link">
            {/* account page */}
            <h4>Profile</h4>
                    </Link>
                    <Link to="/public" className = "link">
            {/* page for all active votes */}
            <h4>See All Reviews</h4>
                    </Link>
            <Link to="/" className = "link">
            <h4 onClick = {logout}>Logout</h4>
            </Link>
            </div>
        </div>
    )
}