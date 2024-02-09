export default function Spot (props) {
    // let time
    // if (props.timeToGo == spring) {
    //     time = spring
    // else if (props.timeToGo == summer) {
    //     time = summer
    // else if (props.timeToGo == winter) {
    //     time = winter
    // }

    // } else if (props.time )
    // let price 
    // if (props.price >=1000)
    return (
        <div className="spot">
            <h1 className="place">{props.place}</h1>
            <h2 className="price">{props.price}</h2>
            <h2 className="time">{props.timeToGo}</h2>
        </div>
    )
}