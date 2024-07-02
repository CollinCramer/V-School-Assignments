import React from 'react'
import Media from './Media.jsx'

export default function MediaList(props) {
    const { media, upVoteMedia, downVoteMedia } = props
    return (
        <div className="mediaList">
            {media.map(med => <Media {...med} key={med._id}
                upVoteMedia={() => upVoteMedia(med._id)}
                downVoteMedia={() => downVoteMedia(med._id)} />)}
        </div>
    )
}