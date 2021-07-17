import React from 'react'
import FriendList from './FriendList'


function App() {
    return (
        <div style={mainStyle}>
            <FriendList />
        </div>
    )
}
export default App


const mainStyle = {
    backgroundColor: "lightgrey"
}