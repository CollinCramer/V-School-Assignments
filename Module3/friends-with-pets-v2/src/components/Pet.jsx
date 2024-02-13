export default function Pet (props) {
    return (
        <div>
            <h3>Name: {props.petName}</h3>
            <h4>Age: {props.petBreed}</h4>
        </div>
    )

}