import React, {useContext, useEffect} from 'react'
import MediaForm from "./MediaForm"
import MediaList from "./MediaList"

import { UserContext} from '../context/UserProvider'


export default function Profile(){

const {user : {username}, addMedia, media, getUserMedia} = useContext(UserContext)

useEffect(() => {
    getUserMedia()
}, [])

    return (
        <div className = "main">
            <h2>Welcome {username}!</h2>
        <MediaForm submit = {addMedia} btnText = "Add Media"/>
        <MediaList media = {media} />
        </div>
    )
}