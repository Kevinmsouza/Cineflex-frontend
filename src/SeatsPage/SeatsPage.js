import "./style.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../others/Footer/Footer";
import Loading from "../others/Loading/Loading";
import Title from "../others/Title/Title";
import Seat from "./Seat/Seat";
import Glossary from "./Glossary/Glossary";

export default function SeatsPage() {
    const [seats, setSeats] = useState(null);
    const { assentosId } = useParams()
    useEffect(() => {
        axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${assentosId}/seats`)
            .then((response) => setSeats(response.data))
            .catch((error) => alert(error))
    }, [])
    console.log(seats)
    const [selectedSeats, setSelectedSeats] = useState(new Array(50))
    console.log(selectedSeats)

    function toggleSelect(seatNumber) {
        let newSelectedSeats = [...selectedSeats]
        newSelectedSeats[seatNumber - 1] = !newSelectedSeats[seatNumber - 1]
        setSelectedSeats(newSelectedSeats)
    }
    if (seats === null) {
        return (
            <Loading />
        )
    }
    return (
        <article className="seats-page" >
            <Title text="Selecione o(s) assento(s)" />
            <section className="seats-box">
                {seats.seats.map((seat, i) => (
                    <Seat
                        number={seat.name}
                        isAvailable={seat.isAvailable}
                        key={seat.id}
                        toggleSelect={toggleSelect}
                        isSelected={selectedSeats[i]}
                    />))}
                <Glossary />
            </section>
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