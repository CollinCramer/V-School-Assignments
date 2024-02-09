import Spot from "./Spot.jsx"
import Data from "../Data.js"

export default function Spots() {
    
    const vacations = Data.map((vacation) => {
        return (
            <Spot 
                place={vacation.place}
                price={vacation.price}
                timeToGo={vacation.timeToGo}
            />
        )
    })
    return (
        vacations
    )
}