import "./style.css";
import Title from "../others/Title/Title";
import MoviePoster from "./MoviePoster/MoviePoster";
import axios from "axios";
import { useState, useEffect } from "react";


export default function Home() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies")
        .then((response) => setMovies(response.data))
        .catch((error) => alert(error))
    }, [])

    if(movies)

    return (
        <main className="home" >
            <Title text="Selecione o filme" />
            <ul className="movie-box" >
                {movies.map((movie) => (
                <MoviePoster
                    id={movie.id}
                    src={movie.posterURL}
                    alt={`Poster de ${movie.title}`}
                />))}
            </ul>
        </main>
    )
}