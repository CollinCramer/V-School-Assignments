import React, {useState, useContext, useEffect} from 'react'
import CommentForm from "./CommentForm"
import IssueForm from './IssueForm'
import Comments from './Comments'
import { UserContext } from '../context/UserProvider'

export default function Issues(props){

  const initInputs = {
    content: ""
  }

  const [toggle, setToggle] = useState(false)
  const [comments, setComments] = useState([])
  const [inputs, setInputs] = useState(initInputs)
  const [issueToggle, setIssueToggle] = useState(false)

  const {title, description, _id, user, upVoteIssue, downVoteIssue, likedUsers, dislikedUsers} = props


  const {userAxios, deleteIssue, handleIssueEdit, ...userState} = useContext(UserContext)


  //get all comments for this issue
  useEffect(() => {
    userAxios.get(`/api/comments/issue/${_id}`)
    .then(res => {
        setComments(res.data)
      })
    .catch(err => console.log(err.response.data.errMsg))
  }, [])

  //function for the new comment form
  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
        ...prevInputs,
      [name]: value
    }))
  }

  function handleSubmit(e){
    // e.preventDefault()
    userAxios.post(`/api/comments/${_id}`, inputs)
    .then(res => addComment(res.data))
    .catch(err => console.log(err.response.data.errMsg))
    
    setInputs(initInputs)
  }

  //update state after a new comment is added
  function addComment(newComment){
        setComments(prevState => (
 [...prevState, newComment]
        ))
}

//delete comment

function deleteComment(commentId){
  userAxios.delete(`api/comments/${commentId}`)
  .then(setComments(prevComments => prevComments.filter(comment => comment._id !== commentId)))
  .catch(err => console.log(err.response.data.errMsg))
}

//edit comment

function handleEdit(id, inputs){

  userAxios.put(`/api/comments/${id}`, inputs)
  .then(res => {
    setComments(prevComments => prevComments.map(comment => comment._id === id? comment : res.data))
  })
  .catch(err => console.log(err.response.data.errMsg))
}



//stuff that gets rendered
  return (
    <div className="issue">
    {/* render issue */}
<h2>Title: {title}</h2>
<div className = "icons">
  {/* upvote button */}
  <div>
  <h3>{likedUsers.length}</h3>
<h3 onClick = {upVoteIssue}>Click to Upvote!</h3>
  </div>
{/* downvote button */}
<div>
<h3>{dislikedUsers.length}</h3>
<h3 onClick = {downVoteIssue}>Click to Downvote!</h3>
</div>
</div>
<h3>Description: {description}</h3>
{/* conditional rendering of edit/delete buttons for issues depending on whether the issues belong to the user */}
{user === userState.user._id && <>
        {issueToggle? 
        <>
        <IssueForm 
        submit = {handleIssueEdit}
        btnText = "Edit Issue"
        issueId = {_id}
        initTitle = {title}
        initDescription = {description}
        />
        <button className = "button" onClick = {() => setIssueToggle(prevToggle => !prevToggle)}>Close</button>
        </>
         : 
         <button className = "button" onClick = {() => setIssueToggle(prevToggle => !prevToggle)}>Edit</button>}
        <button className = "button" onClick = {() => deleteIssue(props._id)}>Delete</button>
        </>}
{/* toggle comments view on or off */}
{toggle? 
<>
{comments.map(comment => <Comments 
{...comment}
key = {comment._id}
deleteComment = {deleteComment}
handleChange = {handleChange}
handleEdit = {handleEdit}
inputs = {inputs}
/>)
 }
 {/* add a form at the bottom of comments to add a comment */}
<CommentForm 
btnText = "Submit Comment" 
toggle = {() => setToggle(prevToggle => !prevToggle)}
handleChange = {handleChange}
handleSubmit = {handleSubmit}
inputs = {inputs.content}
/> 
</>
: 
<div>
<h3 onClick = {() => setToggle(prevToggle => !prevToggle)}>Comments: {comments.length}</h3>

</div>

}
    </div>
  )
}