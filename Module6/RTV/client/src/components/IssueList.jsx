import React from 'react'
import Issues from './Issues.jsx'

export default function IssueList(props){
  const {issues, upVoteIssue, downVoteIssue} = props
  return (
    <div className="issueList">
{issues.map(issue => <Issues {...issue} key = {issue._id} 
  upVoteIssue = {() => upVoteIssue(issue._id)} 
  downVoteIssue = {() => downVoteIssue(issue._id)}/>)}
    </div>
  )
}