import "./style.css";
import Title from "../others/Title/Title";
import MoviePoster from "./MoviePoster/MoviePoster";
import Loading from "../others/Loading/Loading";
import axios from "axios";
import { useState, useEffect } from "react";


export default function HomePage() {
    const [movies, setMovies] = useState(null);
    useEffect(() => {
        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies")
        .then((response) => setMovies(response.data))
        .catch((error) => alert(error))
    }, [])

    if(movies === null){
        return (
            <Loading />
        )
    }

    return (
        <main className="home" >
            <Title text="Selecione o filme" />
            <ul className="movie-box" >
                {movies.map((movie) => (
                <MoviePoster
                    key={movie.id}
                    id={movie.id}
                    src={movie.posterURL}
                    alt={`Poster de ${movie.title}`}
                />))}
            </ul>
        </main>
    )
}