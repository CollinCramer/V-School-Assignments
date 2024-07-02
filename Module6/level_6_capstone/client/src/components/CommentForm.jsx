import React, { useState } from 'react'


export default function CommentForm(props) {


    const { handleChange, handleSubmit, btnText, toggle, inputs } = props


    return (
        <div>

            <form className="form"
                onSubmit={(e) => {
                    e.preventDefault()
                    handleSubmit()
                }}
            >
                <input
                    type="text"
                    name="content"
                    value={inputs}
                    onChange={handleChange}
                    placeholder="comment" />
                <button className="button">{btnText}</button>
            </form>
            <button className="button" onClick={toggle}>Close</button>
        </div>
    )
}