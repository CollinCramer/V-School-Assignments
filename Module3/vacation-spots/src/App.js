
import React from "react"
import Vacation from "./Vacation"
import {vacationSpots} from "./vacationSpots"

function App() {
    const vacationComponents = vacationSpots.map(item => <Vacation key={item.id} vacation={item}/>)
    
    return (
        <div>
            {vacationComponents}
        </div>
    )
}

export default App