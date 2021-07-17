import React from "react"
import { vacationSpots } from "./vacationSpots"

function Vacation(props) {
const {vacation} = props
    // let priceRange = ''
    // if (props.price > 0) {
    //     priceRange = '$'
    // } else if (props.price > 500) {
    //     priceRange = '$$'
    // } else {
    //     priceRange = '$$$'
    // }

    let seasonColorChange
    const {timeToGo} = vacation
    
    switch (timeToGo) {
        case 'Spring':
            seasonColorChange = '#90ee90'
            
            break;
        case 'Summer':
            seasonColorChange = '#ffcccb'
                
            break;
        case 'Fall':
            seasonColorChange = '#fed8b1'
                
            break;
        case 'Winter':
            seasonColorChange = '#add8e6'
                
            break;
        default: 
            seasonColorChange = '#d3d3d3'
            break;
    }

    const style = {
        
        background: seasonColorChange,
        margin: 'auto',
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '1px solid #efefef',
      
        padding: '30px',
        
    }

    const title = {
        fontFamily: 'cursive',
        fontWeight: 'bold',
        fontSize: '30px',
    }

    const priceStyle = {
        fontSize: '20px',
    }

    return (
        <div style = {style} className = 'vacation'>
            <h2 style = {title}>{props.vacation.place}</h2>
            <h4 style = {priceStyle}>${props.vacation.price}</h4>
            <h4>{props.vacation.timeToGo}</h4>
        </div>
    )
}

export default Vacation