import React, { useState, useContext } from "react";
import axios from "axios";
import Tv from "./Tv";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";

export default function TelevisionPopular() {

    const navigate =  useNavigate()
    const {color} = useContext(ThemeContext)

    const [tv, setTv] = useState([{
        original_name:"",
        overview:"",
        popularity:"",
        poster_path:"",
        genres:[],
        vote_average: 0,


    }])

    React.useEffect(() => {

        axios.get('https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=1&sort_by=popularity.desc', {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzgyNjdhYmZkODBmNDg2YmVkNDc1NjBjMTBiYWE1NyIsInN1YiI6IjY2M2ZkMjU1ZGM2ZGE4ZDJmYjdlOGRiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.haKBbwDkarR7NK4Va09wEa0KifR1a170Azc9-pj2dwk",
            }
        })
            .then(res => {
                console.log(res)
                setTv(res.data.results.map(show => {
                    return {
                        original_name: show.original_name,
                        overview: show.overview,
                        popularity: show.popularity,
                        poster_path: show.poster_path,
                        genres: show.genres,
                        vote_average: show.vote_average,
                    }

                })),
                console.log(tv)
    })},[])
    console.log(tv)


    return (
        <main className={`${color}--main--two`}>
            <div className="button--container">
                <ul className="inner">
                    <li className="inner"><button onClick={() => navigate("/")}>Home</button></li>

                    <li className="inner"><button onClick={() => navigate("/movies")}>Top Rated Movies</button></li>

                    <li className="inner"><button onClick={() => navigate("/movies/popular")}>Most Popular Movies</button></li>

                    <li className="inner"><button onClick={() => navigate("/tv")}>Top Rated TV</button></li>
                </ul>
            </div>
            <div className="container">
                <h1 className={`${color}--movie--header`}>Most Popular Shows</h1>
            <ol>
                {tv.map((element) => {
                    return (
                        <Tv
                            original_name={element.original_name}
                            overview={element.overview}
                            popularity={element.popularity}
                            genres={element.genres}
                            vote_average={element.vote_average}
                        />
                    )

                })}
            </ol>
            </div>
        </main>
    )
}``