import React, { useState } from 'react'


export default function MediaForm(props) {

    const initInputs = {
        title: props.initTitle || "",
        type: props.initType || "",
        rating: props.initRating || 0,
        imgUrl: props.initImgUrl || "",
    }

    const [inputs, setInputs] = useState(initInputs)

    const { submit, btnText, mediaId, initTitle, initRating, initImgUrl, initType } = props

    // onChange function for the form
    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    // function fires when it is submitted
    function handleSubmit(e) {
        submit(inputs, mediaId)
        setInputs(initInputs)
    }


    const { title, type, rating, imgUrl } = inputs
    return (
        <form className="form" onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
                placeholder="Title" />
            <input
                type="text"
                name="type"
                value={type}
                onChange={handleChange}
                placeholder="Media Type" />
            <input
                type="number"
                name="rating"
                value={rating}
                onChange={handleChange}
                placeholder="rating" />
            <input
                type="text"
                name="imgUrl"
                value={imgUrl}
                onChange={handleChange}
                placeholder="Image" />
            <button className="button">{btnText}</button>
        </form>
    )
}