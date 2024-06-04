import React, { useState, useEffect } from "react";
import AddMediaForm from "./AddMediaForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Game from "./Game";


export default function Games() {

    const navigate = useNavigate()

    const [toggle, setToggle] = useState(false)

    const [games, setGames] = useState([{
        name:"",
        releaseYear:0,
        platform:"",
        img:"",
        rating:0,
        developerId:"",
        completed:false,

    }])

    const [devs, setDevs] = useState([])

    function getGames() {
        axios.get("/api/games")
            .then(res => setGames(res.data))
            .catch(err => console.log(err.response.data.errMsg))
    }

    function addGame(newGame) {
        console.log(newGame)
        axios.post(`/api/games`, newGame)
            .then(res => {
                setGames(prevGames => [...prevGames, res.data])
            })
            .catch(err => console.log(err))
            console.log(newGame)
    }


    function deleteGame(gameId){
        axios.delete(`/api/games/${gameId}`)
            .then(res => {
                setGames(prevGames => prevGames.filter(game => game._id !== gameId))
            })
            .catch(err => console.log(err))
    }

    function editGame(updates, gameId){
        axios.put(`/api/games/${gameId}`, updates)
        // console.log works. changing to make state update
        .then(res => {
            setGames(prevGames => prevGames.map(game => game._id !== gameId ? game : res.data))
        })
        .catch(err => console.log(err))
    }

      // handlefilter
      function handleFilter(e) {
        if(e.target.value === "reset"){
            getGames()
        } else {
        axios.get(`/api/games/search/platform?platform=${e.target.value}`)
            .then(res => setGames(res.data))
            .catch(err => console.log(err))
        }
    }

    function getDevs() {
        axios.get("/api/developers")
            .then(res => setDevs(res.data))
            .catch(err => console.log(err.response.data.errMsg))
    }

    // handlefilter
    function handleFilterTwo(e) {
        if(e.target.value === "reset"){
            getGames()
        } else {
        axios.get(`/api/games/search/developerId?developerId=${e.target.value}`)
            .then(res => setGames(res.data))
            .catch(err => console.log(err))
        }
    }

    useEffect(() => {
        getGames(),
        getDevs()
    },[])



    return(

        <div className="game--container">
          { !toggle ? 
          <>
            <button onClick={() => setToggle(prevToggle => !prevToggle)}>Add New Game</button>
          </>
          :
          <>
            <AddMediaForm 
            submit = {addGame}
            btnText = "Add Game"/>
          </>


          }
 

        <select onChange={handleFilter} className='filter--form'>
            <option value="reset">Select a Platform</option>
            <option value="PC">PC</option>
            <option value="PSX">PSX</option>
            <option value="Other">Other</option>

        </select>
        <select onChange={handleFilterTwo} className='filter--form'>
            <option value="reset">Sort by Developer</option>
            {devs.map(dev => 
                <option
                    value={dev._id}
    
                >
                    {dev.name}
                </option>
               ) }
            

        </select>

        {games.map(game => 
                <Game 
                    {...game}
                    key={game.name}

                    // passing down functions as a prop
                    deleteGame = {deleteGame}
                    editGame = {editGame}
                />)}
        </div>
    )
}