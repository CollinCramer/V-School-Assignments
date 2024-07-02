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
        media: [],
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
            media: [],
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

//add media

    function addMedia(newMedia) {
        userAxios.post("/api/media", newMedia)
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    media: [...prevState.media, res.data]
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    function getUserMedia() {
        userAxios.get("/api/media/user")
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    media: res.data
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    //edit media

    function handleMediaEdit(inputs, mediaId) {
        // console.log(mediaId)
        userAxios.put(`api/media/${mediaId}`, inputs)
            .then(setUserState(prevUserState => ({
                ...prevUserState,
                media: prevUserState.media.map(media => {
                    if (media._id !== mediaId) {
                        return media
                    } else {
                        return {
                            ...media,
                            inputs
                        }
                    }
                })
            })
            )
            )
            .catch(err => console.log(err.response.data.errMsg))
    }

    //delete media

    function deleteMedia(mediaId) {
        console.log(userState)
        console.log(mediaId)
        userAxios.delete(`/api/media/${mediaId}`)
            .then(setUserState(prevUserState => ({
                ...prevUserState,
                media: prevUserState.media.filter(med => med._id !== mediaId)
            })
            ))
            .catch(err => console.log(err.response.data.errMsg))
        userAxios.delete(`/api/comments/media/${mediaId}`)
            .then(res => console.log(res))
            .catch(err => console.log(err.response.data.errMsg))
    }

    // handle upVote

    function upVoteMedia(mediaId, inputs){
        setUserState(prevUserState => 
            ({ ...prevUserState, 
                media: prevUserState.media.map(med => mediaId !== med._id ? med : inputs) }))
    }

    //handle downVote

    function downVoteMedia(mediaId, inputs){
        setUserState(prevUserState => 
            ({ ...prevUserState, 
                media: prevUserState.media.map(med => mediaId !== med._id ? med : inputs) }))
    }

    return (
        <UserContext.Provider
            value={{
                ...userState,
                signup,
                login,
                logout,
                addMedia,
                getUserMedia,
                userAxios,
                deleteMedia,
                handleMediaEdit,
                resetAuthError,
                upVoteMedia,
                downVoteMedia
            }}

        >
            {props.children}
        </UserContext.Provider>
    )
}