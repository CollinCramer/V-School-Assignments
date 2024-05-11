import React, { useState } from "react";
import axios from "axios";


export default function Movies() {

    const [tv, setTv] = useState([{
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
                setTv(res.data.map(show => {
                    return {
                        original_title: show.original_title,
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
        <div>
            <h1>Movie Page</h1>
        </div>
    )
}