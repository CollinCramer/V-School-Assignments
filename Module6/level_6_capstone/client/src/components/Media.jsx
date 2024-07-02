import React, { useState, useContext, useEffect } from 'react'
import CommentForm from "./CommentForm"
import MediaForm from './MediaForm'
import Comments from './Comments'
import { UserContext } from '../context/UserProvider'

export default function Media(props) {

    const initInputs = {
        content: ""
    }

    const [toggle, setToggle] = useState(false)
    const [comments, setComments] = useState([])
    const [inputs, setInputs] = useState(initInputs)
    const [mediaToggle, setMediaToggle] = useState(false)

    const { title, type, imgUrl, rating, _id, user, likedUsers, upVoteMedia, downVoteMedia, dislikedUsers } = props
    // console.log(props)

    const { userAxios, deleteMedia, handleMediaEdit, ...userState } = useContext(UserContext)


    //get all comments for this media
    useEffect(() => {
        userAxios.get(`/api/comments/media/${_id}`)
            .then(res => {
                setComments(res.data)
            })
            .catch(err => console.log(err.response.data.errMsg))
    }, [])

    //function for the new comment form
    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSubmit(e) {
        // e.preventDefault()
        userAxios.post(`/api/comments/${_id}`, inputs)
            .then(res => addComment(res.data))
            .catch(err => console.log(err.response.data.errMsg))

        setInputs(initInputs)
    }

    //update state after a new comment is added
    function addComment(newComment) {
        setComments(prevState => (
            [...prevState, newComment]
        ))
    }

    //delete comment

    function deleteComment(commentId) {
        userAxios.delete(`api/comments/${commentId}`)
            .then(setComments(prevComments => prevComments.filter(comment => comment._id !== commentId)))
            .catch(err => console.log(err.response.data.errMsg))
    }

    //edit comment

    function handleEdit(id, inputs) {

        userAxios.put(`/api/comments/${id}`, inputs)
            .then(res => {
                setComments(prevComments => prevComments.map(comment => comment._id === id ? comment : res.data))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }



    //stuff that gets rendered
    return (
        <div className="container">
            {/* render media */}
            <div className='card'>
                <img src={`${imgUrl}`}></img>
                <h2>Title: {title}</h2>
                <h2>Type: {type}</h2>

                <h3>Rating: {rating}</h3>
                <div className="icons">
                    {/* upvote button */}
                    <div>
                        <h3>{likedUsers?.length}</h3>
                        {/* like and dislike to be changed to icons */}
                        <h3 onClick={upVoteMedia}>Like</h3>
                    </div>
                    {/* downvote button */}
                    <div>
                        <h3>{dislikedUsers?.length}</h3>
                        <h3 onClick={downVoteMedia}>Dislike</h3>
                    </div>
                </div>
            </div>
            {/* conditional rendering of edit/delete buttons for media depending on whether the media belong to the user */}
            {user === userState.user._id && <>
                {mediaToggle ?
                    <>
                        <MediaForm
                            submit={handleMediaEdit}
                            btnText="Edit"
                            mediaId={_id}
                            initTitle={title}
                            initRating={rating}
                            initImgUrl={imgUrl}
                            initType={type}
                        />
                        <button className="button" onClick={() => setMediaToggle(prevToggle => !prevToggle)}>Close</button>
                    </>
                    :
                    <button className="button" onClick={() => setMediaToggle(prevToggle => !prevToggle)}>Edit</button>}
                <button className="button" onClick={() => deleteMedia(props._id)}>Delete</button>
            </>}
            {/* toggle comments view on or off */}
            {toggle ?
                <>
                    {comments.map(comment => <Comments
                        {...comment}
                        key={comment._id}
                        deleteComment={deleteComment}
                        handleChange={handleChange}
                        handleEdit={handleEdit}
                        inputs={inputs}
                    />)
                    }
                    {/* add a form at the bottom of comments to add a comment */}
                    <CommentForm
                        btnText="Submit Comment"
                        toggle={() => setToggle(prevToggle => !prevToggle)}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        inputs={inputs.content}
                    />
                </>
                :
                <div>
                    <h3 onClick={() => setToggle(prevToggle => !prevToggle)}>Comments: {comments.length}</h3>

                </div>

            }
        </div>
    )
}