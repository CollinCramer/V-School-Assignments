import React, { useState, useContext } from 'react'
import AuthForm from './AuthForm'
import { UserContext } from '../context/UserProvider'


export default function Auth() {

    const initInputs = { username: "", password: "" }

    const [inputs, setInputs] = useState(initInputs)
    // toggle for conditional rendering
    const [toggle, setToggle] = useState(false)

    // imports from userContext
    const { signup, login, errMsg, resetAuthError } = useContext(UserContext)

    // will run on any form change
    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    // runs on form submit
    function handleSignup(e) {
        e.preventDefault()
        signup(inputs)
    }

    // runs form submit
    function handleLogin(e) {
        e.preventDefault()
        login(inputs)
    }

    // toggle function
function toggleForm(){
    setToggle(prev => !prev)
    resetAuthError()
}


    return (
        <div className="main">
            <div className="authPage">
                <h1>Media Archive</h1>
                {/* toggle for conditional rendering */}
                {!toggle ?
                    <>
                        <AuthForm
                            handleChange={handleChange}
                            handleSubmit={handleSignup}
                            inputs={inputs}
                            btnText="Register"
                            errMsg = {errMsg}
                        />
                        <p onClick={toggleForm}>Already a Registered Reviewer?</p>
                    </>

                    :

                    <>
                        <AuthForm
                            handleChange={handleChange}
                            handleSubmit={handleLogin}
                            inputs={inputs}
                            btnText="Login"
                            errMsg = {errMsg}
                        />
                        <p onClick={toggleForm}>Not a Registered Reviewer?</p>
                    </>
                }
            </div>
        </div>
    )
}