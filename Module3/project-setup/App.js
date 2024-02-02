import React from "react"
import ReactDOM from "react-dom"
import Main from "./Components/Main"
import Navbar from "./Components/Navbar"

export default function App () {

    return (
        <div className="container">
            <Main />
            <Navbar />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))