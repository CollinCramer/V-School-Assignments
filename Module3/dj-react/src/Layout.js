import React from "react"
import ReactDom from "react-dom"
import Squares from './Squares.js';
import Buttons from './Buttons.js';

class Layout extends React.Component {
    constructor() {
        super ()
        this.state={color: ["white", "white", "white", "white"]}
        this.changeColors1=this.changeColors1.bind(this)
        this.changeColors2=this.changeColors2.bind(this)
        this.changeColors3=this.changeColors3.bind(this)
        this.changeColors4=this.changeColors4.bind(this)
        this.changeColors5=this.changeColors5.bind(this)
        this.changeColors6=this.changeColors6.bind(this)
        this.changeColors7=this.changeColors7.bind(this)
        this.changeColors8=this.changeColors8.bind(this)



    }
    changeColors1 = () => {
        this.setState(this.state.color[0] === 'white'? this.state.color(["black", "black", "black", "black"]) : this.state.color(["white", "white", "white", "white"]))

    }
    changeColors2 = () => {
        this.setState({color: ["purple","purple", this.state.color[2], this.state.color[3]]})
    }
    changeColors3 = () => {
        this.setState({color: [this.state.color[0], this.state.color[1], "blue", this.state.color[3]]})

    }
    changeColors4 = () => {
        this.setState({color: [this.state.color[0], this.state.color[1], this.state.color[2], "blue"]})

    }
    changeColors5 = () => {
        this.setState({color: ["green", "orange", "orange", "green"]})
    }
    changeColors6 = () => {
        this.setState({color: [this.state.color[0], "teal", "teal", "yellow"]})
    }
    changeColors7 = () => {
        this.setState({color: ["red", "black", "gray", this.state.color[3]]})
    }
    changeColors8 = () => {
        this.setState({color: ["black", "white", "white", "black"]})
    }
    render (){
        return(
            <div>
                <Squares color={this.state.color} />
                <Buttons changeColors1={this.changeColors1} changeColors2={this.changeColors2} changeColors3={this.changeColors3} changeColors4={this.changeColors4} changeColors5={this.changeColors5} changeColors6={this.changeColors6} changeColors7={this.changeColors7} changeColors8={this.changeColors8}/>
            </div>
        )
    }
}

export default Layout;