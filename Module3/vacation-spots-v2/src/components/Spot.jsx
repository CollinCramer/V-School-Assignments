export default function Spot (props) {
   
    let time;
    if (props.timeToGo === "Summer") {
        time = "summer"

    } else if (props.timeToGo === "Fall"){
        time = "fall"

    } else if (props.timeToGo === "Winter") {
        time = "winter"

    } else  {
        time = "spring"
    }

    let expense;
    if (props.price >= 1000 ) {
        expense = "$$$"
    } else if (props.price <= 500) {
        expense = "$"
    } else {
        expense = "$$"
    }
    return (
        <div className={`spot ${time}`}>
            <h1 className="place">{props.place}</h1>
            <h2 className="price">{expense} {props.price}</h2>
            <h2 className={time}>{props.timeToGo}</h2>
        </div>
    )
}