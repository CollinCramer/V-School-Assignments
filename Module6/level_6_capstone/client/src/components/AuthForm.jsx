import React from 'react'

export default function AuthForm(props) {
    const {
        handleChange,
        handleSubmit,
        btnText,
        errMsg,
        inputs: {
            username,
            password
        }
    } = props

    return (
        <form className='main'
        onSubmit={handleSubmit}>
            <input className='un'
                type="text"
                value={username}
                name="username"
                onChange={handleChange}
                placeholder="Username" />
            <input className='pass'
                type="password"
                value={password}
                name="password"
                onChange={handleChange}
                placeholder="Password" />
            <button className='submit'>{btnText}</button>

            {/* adding in a p tag for displaying the error message for issues with login/signup*/}
            <p>{errMsg}</p>

        </form>
    )
}