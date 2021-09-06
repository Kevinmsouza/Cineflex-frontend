import "./style.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Footer from "../others/Footer/Footer";
import Loading from "../others/Loading/Loading";
import Title from "../others/Title/Title";
import Seat from "./Seat/Seat";
import Glossary from "./Glossary/Glossary";
import Form from "./Form/Form";
import Button from "../others/Button/Button";

export default function SeatsPage({ setReservationData }) {
    const [seatsDATA, setSeatsDATA] = useState(null);
    const { assentosId } = useParams()
    useEffect(() => {
        axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${assentosId}/seats`)
            .then((response) => setSeatsDATA(response.data))
            .catch((error) => alert(error))
    }, [])
    // console.log(seatsDATA)
    let history = useHistory();
    const [nameValue, setNameValue] = useState("");
    const [CPFValue, SetCPFValue] = useState("");
    const [selectedSeats, setSelectedSeats] = useState([]);
    
    function toggleSelect(seatId) {
        let newSelectedSeats = [...selectedSeats];
        if(newSelectedSeats.includes(seatId)){
            newSelectedSeats.splice(newSelectedSeats.indexOf(seatId), 1);
        }else{
            newSelectedSeats.push(seatId);
        }
        setSelectedSeats(newSelectedSeats);
    }
    function finish() {
        if(verifyInfo()){
            setReservationData({
                ids: selectedSeats,
                name: nameValue,
                cpf: CPFValue,
                movie: seatsDATA.movie.title,
                date: seatsDATA.day.date,
                showtime: seatsDATA.name
            });
            history.push("/sucesso");
        }
    }
    function verifyInfo() {
        if (nameValue && CPFValue && selectedSeats[0] !== undefined) {
            return true;
        }
        return false;
    }
    if (seatsDATA === null) {
        return (
            <Loading />
        )
    }
    return (
        <article className="seats-page" >
            <Title text="Selecione o(s) assento(s)" />
            <section className="seats-box">
                {seatsDATA.seats.map((seat, i) => (
                    <Seat
                        number={seat.name}
                        isAvailable={seat.isAvailable}
                        key={seat.id}
                        id={seat.id}
                        toggleSelect={toggleSelect}
                        isSelected={selectedSeats.includes(seat.id)}
                    />))}
                <Glossary />
            </section>
            <Form title="nome" value={nameValue} attValue={(event) => setNameValue(event.target.value)} />
            <Form title="CPF" value={CPFValue} attValue={(event) => SetCPFValue(event.target.value)} />
            <Button onclick={finish} text="Reservar assento(s)" />
            <Footer
                posterURL={seatsDATA.movie.posterURL}
                movieTitle={seatsDATA.movie.title}
                id={seatsDATA.movie.id}
                weekday={seatsDATA.day.weekday}
                showtime={seatsDATA.name}
            />
        </article>
    )
}