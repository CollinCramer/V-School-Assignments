import React, { useState, useEffect, useContext } from 'react'
import MediaList from './MediaList'
import { UserContext } from '../context/UserProvider'

export default function Public(props) {

    const { userAxios, upVote, downVote } = useContext(UserContext)

    const [allMedia, setAllMedia] = useState([])

    //get all media

    useEffect(() => {
        userAxios.get("/api/media")
            .then(res => {
                setAllMedia(res.data)
            })
            .catch(err => console.log(err.response.data.errMsg))
    }, [])

    //upvote media

    function upVoteMedia(mediaId) {
        userAxios.put(`/api/media/upVote/${mediaId}`)
            .then(res => {
                console.log(res)
                setAllMedia(prevMedia => prevMedia.map(media => mediaId !== media._id ? media : res.data))
                // upVoteMedia(mediaId, res.data)
            })
            .catch(err => console.log(err))
    }

    //downvote media

    function downVoteMedia(mediaId) {
        userAxios.put(`/api/media/downVote/${mediaId}`)
            .then(res => {
                setAllMedia(prevMedia => prevMedia.map(media => mediaId !== media._id ? media : res.data))

            })
            .catch(err => console.log(err))
    }

    return (
        <div className='main'>
            <MediaList media={allMedia}
                upVoteMedia={(mediaId) => upVoteMedia(mediaId)}
                downVoteMedia={(mediaId) => downVoteMedia(mediaId)} />
        </div>
    )

}