import React, { useState } from "react";
import axios from "axios"

export const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function UserProvider(props) {

    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        issues: [],
        comments: [],
        errMsg: ""
    }

    const [userState, setUserState] = useState(initState)

    function signup(credentials) {
        axios.post("/user/signup", credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }))
            })
            .catch(err => handleAuthError(err.response.data.errMsg))
    }

    function login(credentials) {
        axios.post("/user/login", credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }))
            })
            .catch(err => handleAuthError(err.response.data.errMsg))
    }

    // console.log(userState)

    function logout() {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            user: {},
            token: "",
            issues: [],
            comments: []
        })
    }

    function handleAuthError(errMsg) {
        setUserState(prevState => ({
            ...prevState,
            errMsg
        }))
    }

    function resetAuthError(){
        setUserState(prevState => ({
            ...prevState,
            errMsg:""
        }))
    }

//add issue

    function addIssue(newIssue) {
        userAxios.post("/api/issues", newIssue)
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    issues: [...prevState.issues, res.data]
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    function getUserIssues() {
        userAxios.get("/api/issues/user")
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    issues: res.data
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    //edit issue

    function handleIssueEdit(inputs, issueId) {
        // console.log(issueId)
        userAxios.put(`api/issues/${issueId}`, inputs)
            .then(setUserState(prevUserState => ({
                ...prevUserState,
                issues: prevUserState.issues.map(issue => {
                    if (issue._id !== issueId) {
                        return issue
                    } else {
                        return {
                            ...issue,
                            inputs
                        }
                    }
                })
            })
            )
            )
            .catch(err => console.log(err.response.data.errMsg))
    }

    //delete issue

    function deleteIssue(issueId) {
        console.log(userState)
        console.log(issueId)
        userAxios.delete(`/api/issues/${issueId}`)
            .then(setUserState(prevUserState => ({
                ...prevUserState,
                issues: prevUserState.issues.filter(issue => issue._id !== issueId)
            })
            ))
            .catch(err => console.log(err.response.data.errMsg))
        userAxios.delete(`/api/comments/issue/${issueId}`)
            .then(res => console.log(res))
            .catch(err => console.log(err.response.data.errMsg))
    }

    // handle upVote

    function upVoteIssue(issueId, inputs){
        setUserState(prevUserState => 
            ({ ...prevUserState, 
                issues: prevUserState.issues.map(issue => issueId !== issue._id ? issue : inputs) }))
    }

    //handle downVote

    function downVoteIssue(issueId, inputs){
        setUserState(prevUserState => 
            ({ ...prevUserState, 
                issues: prevUserState.issues.map(issue => issueId !== issue._id ? issue : inputs) }))
    }

    return (
        <UserContext.Provider
            value={{
                ...userState,
                signup,
                login,
                logout,
                addIssue,
                getUserIssues,
                userAxios,
                deleteIssue,
                handleIssueEdit,
                resetAuthError,
                upVoteIssue,
                downVoteIssue
            }}

        >
            {props.children}
        </UserContext.Provider>
    )
}