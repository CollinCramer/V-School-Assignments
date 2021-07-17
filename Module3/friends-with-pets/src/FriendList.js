import React from "react"
import friends from "./friends"
import Friend from "./Friend"

export default function FriendList() {
const FriendListComponents = friends.map(friendsItem => {return <Friend key={friendsItem.id} friend={friendsItem.name} age={friendsItem.age} pets={friendsItem.pets}/>

})
console.log(FriendListComponents)    
    return(
        <div>
            {FriendListComponents}
        </div>
    )
}