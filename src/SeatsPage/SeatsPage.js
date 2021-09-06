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
    let history = useHistory();
    const [nameValue, setNameValue] = useState("");
    const [CPFValue, SetCPFValue] = useState("");
    const [seats, setSeats] = useState(null);
    const { assentosId } = useParams()
    useEffect(() => {
        axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${assentosId}/seats`)
            .then((response) => setSeats(response.data))
            .catch((error) => alert(error))
    }, [])
    // console.log(seats)
    const [selectedSeats, setSelectedSeats] = useState(new Array(50));
    const selectedSeatsIDs = selectedSeats.map((seat, i) => seat ? seats.seats[i].id : -1)
        .filter((seatIndex) => seatIndex >= 0 ? true : false);
    // console.log(selectedSeatsIDs)    
    function toggleSelect(seatNumber) {
        let newSelectedSeats = [...selectedSeats];
        newSelectedSeats[seatNumber - 1] = !newSelectedSeats[seatNumber - 1];
        setSelectedSeats(newSelectedSeats);
    }
    function finish() {
        if(verifyInfo()){
            setReservationData({
                ids: selectedSeatsIDs,
                name: nameValue,
                cpf: CPFValue,
                movie: seats.movie.title,
                date: seats.day.date,
                showtime: seats.name
            });
            history.push("/sucesso");
        }
    }
    function verifyInfo() {
        if (nameValue && CPFValue && selectedSeatsIDs[0] != undefined) {
            return true;
        }
        return false;
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
            <Form title="nome" value={nameValue} attValue={(event) => setNameValue(event.target.value)} />
            <Form title="CPF" value={CPFValue} attValue={(event) => SetCPFValue(event.target.value)} />
            <Button onclick={finish} text="Reservar assento(s)" />
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