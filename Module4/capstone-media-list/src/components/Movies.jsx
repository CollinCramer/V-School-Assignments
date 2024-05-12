import React, { useState } from "react";
import axios from "axios";
import Movie from "./Movie";
import { useNavigate } from "react-router-dom";


export default function Movies() {

    const navigate =  useNavigate()

    const [movies, setMovies] = useState([{
        original_title:"",
        overview:"",
        popularity:"",
        poster_path:"",
        genres:[],
        vote_average: 0,


    }])

    React.useEffect(() => {

        axios.get('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200', {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzgyNjdhYmZkODBmNDg2YmVkNDc1NjBjMTBiYWE1NyIsInN1YiI6IjY2M2ZkMjU1ZGM2ZGE4ZDJmYjdlOGRiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.haKBbwDkarR7NK4Va09wEa0KifR1a170Azc9-pj2dwk",
            }
        })
            .then(res => {
                console.log(res)
                setMovies(res.data.results.map(show => {
                    return {
                        original_title: show.original_title,
                        overview: show.overview,
                        popularity: show.popularity,
                        poster_path: show.poster_path,
                        genres: show.genres,
                        vote_average: show.vote_average,
                    }

                })),
                console.log(movies)
    })},[])
    console.log(movies)


    return (
        <main>
            <div className="button--container">
                <button onClick={() => navigate("/")}>Home</button>
                <button onClick={() => navigate("/tv")}>Most Popular TV</button>
                <button>Random Movie</button>
            </div>
            <div className="container">
                <h1 className="movie--header">Most Popular Movies</h1>
            <ol>
                {movies.map((element) => {
                    return (
                        <Movie
                            poster_path={element.poster_path}
                            original_title={element.original_title}
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
}