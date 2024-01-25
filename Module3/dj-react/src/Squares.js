import React from "react"
import ReactDom from "react-dom"

class Squares extends React.Component{
    constructor(props) {
        super(props) 
       
    }
   

    


    render() 
   
    {
        const mystyle = {
            display: 'grid',
            gridTemplateRows: 'repeat(2, 1fr)',
            gridTemplateColumns: 'repeat(2, 1fr)',
            width: '25vw',
            height: '25vh',
            position: 'relative',
            paddingBottom: '210px',
            
            
          };
          console.log(this.props)
        return (<div style={mystyle}>

        <Square backgroundColor={this.props.color[0]}/>
        <Square backgroundColor={this.props.color[1]}/>
        <Square backgroundColor={this.props.color[2]}/>
        <Square backgroundColor={this.props.color[3]}/>
        </div>)
        }
    
    }


class Square extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {

        const mystyle = {
                    display: 'grid',
                    gridTemplateRows: 'repeat(2, 1fr)',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    width: '25vw',
                    height: '25vh',
                    borderStyle: 'solid',
                    backgroundColor: this.props.backgroundColor,
                  };
        return <div style ={mystyle}></div>
    }
}
// function Square (props){

//     const mystyle = {
//         display: 'grid',
//         gridTemplateRows: 'repeat(2, 1fr)',
//         gridTemplateColumns: 'repeat(2, 1fr)',
//         width: '25vw',
//         height: '25vh',
//         borderStyle: 'solid',
//         backgroundColor: props.backgroundColor,
//       };

//     return <div style ={mystyle}></div>


// }

export default Squares;