import "./style.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../others/Footer/Footer";
import Loading from "../others/Loading/Loading";

export default function SeatsPage() {
    const [seats, setSeats] = useState(null);
    const { assentosId } = useParams()
    useEffect(() => {
        axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${assentosId}/seats`)
        .then((response) => setSeats(response.data))
        .catch((error) => alert(error))
    }, [])
    console.log(seats)
    if (seats === null){
        return (
            <Loading />
        )
    }

    return(
        <article className="" >
            
            <Footer
                posterURL={seats.movie.posterURL}
                movieTitle={seats.movie.title}
                id={seats.movie.id}
                weekday={seats.day.weekday}
                showtime={seats.name}
            />
        </article>
    )
}