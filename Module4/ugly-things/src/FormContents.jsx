import React, { useContext } from "react";
import { AppContext } from "./AppContext";

export default function FormContents(props) {
    const {handleChange, title, description, imgUrl, handleSubmit} = useContext(AppContext)

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
            placeholder="Thing"
            onChange={handleChange}
            name="title"
            value={title}>
            </input>
            <input type="text"
            placeholder="Why it's Ugly"
            name="description"
            onChange={handleChange}
            value={description}>
            </input>
            <input type="text"
            placeholder="image link"
            name="imgUrl"
            onChange={handleChange}
            value={imgUrl}>
            </input>
            <button type="button">Submit Ugly Thing</button>
        </form>
    )
}