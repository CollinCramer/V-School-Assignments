import React, {useState, useContext, useEffect} from 'react'
import { UserContext } from '../context/UserProvider'
import CommentForm from './CommentForm'



export default function Comment(props){
    
    const {user : {_id}} = useContext(UserContext)
    const userId = _id
    
    const {content, user, deleteComment, handleChange, handleEdit, inputs} = props

    const [toggle, setToggle] = useState(false)
    



    return(
        <div className = "comment">
        <p>{content}</p>
        {user === userId && <>
        {toggle? <CommentForm 
        btnText = "Submit Edit" 
        toggle = {() => setToggle(prevToggle => !prevToggle)}
        handleChange = {handleChange}
        handleSubmit = {(e) => { handleEdit(props._id, inputs)}}
        inputs = {inputs.content}
        /> : <button className = "button" onClick = {() => setToggle(prevToggle => !prevToggle)}>Edit</button>}
        <button className = "button" onClick = {() => deleteComment(props._id)}>Delete</button>
        </>}
        </div>
    )
}