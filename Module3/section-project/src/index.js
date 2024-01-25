import React from "react"
import ReactDom from "react-dom"

const Page = (
    <div>
        <img src="./react-logo.png" width="40px" />
        <h1>Fun facts about react</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100k stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
)

ReactDOM.render(<Page />, document.getElementById("root"))