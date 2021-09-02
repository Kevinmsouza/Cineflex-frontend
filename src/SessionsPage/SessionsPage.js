import "./style.css";
import Title from "../others/Title/Title";
import axios from "axios";
import { useState, useEffect } from "react";

export default function SessionsPage() {
    const [sessions, setSessions] = useState(null);
    useEffect(() => {
        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies/ID_DO_FILME/showtimes")
        .then((response) => setSessions(response.data))
        .catch((error) => alert(error))
    }, [])
    return(
        <article className="Sessions" >
            <Title text="Selecione o horário"/>
            
        </article>
    )
}