import React from 'react'
import ReactDom from 'react-dom'

class Buttons extends React.Component  {
    constructor(props) {
        super(props) 
    }

    render (){
        const buttonStyle = {

            position: "absolute",
            
    
        }
    
        
        
    
        return (
            <div style={buttonStyle}>
                <button onClick = {this.props.changeColors1}>Button 1</button>
                <button onClick = {this.props.changeColors2}>Button 2</button>
                <button onClick = {this.props.changeColors3}>Button 3</button>
                <button onClick = {this.props.changeColors4}>Button 4</button>
                <button onClick = {this.props.changeColors5}>Button 5</button>
                <button onClick = {this.props.changeColors6}>Button 6</button>
                <button onClick = {this.props.changeColors7}>Button 7</button>
                <button onClick = {this.props.changeColors8}>Button 8</button>
                
            </div>
        )
    }

}



export default Buttons;
