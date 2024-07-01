import React, {useContext, useEffect} from 'react'
import IssueForm from "./IssueForm"
import IssueList from "./IssueList"

import { UserContext} from '../context/UserProvider'


export default function Profile(){

const {user : {username}, addIssue, issues, getUserIssues} = useContext(UserContext)

useEffect(() => {
    getUserIssues()
}, [])

    return (
        <div className = "main">
            <h2>Welcome {username}!</h2>
        <IssueForm submit = {addIssue} btnText = "Add Issue"/>
        <IssueList issues = {issues} />
        </div>
    )
}