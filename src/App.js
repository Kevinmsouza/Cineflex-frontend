import "./css/reset.css";
import "./css/style.css";
import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header/Header";
import HomePage from "./HomePage/HomePage";
import SessionsPage from "./SessionsPage/SessionsPage";
import SeatsPage from "./SeatsPage/SeatsPage";
import SuccessPage from "./SuccessPage/SuccessPage";

export default function App() {
    const [reservationData, setReservationData] = useState({
        ids: [],
	    name: "",
	    cpf: "",
        movie: "",
        date: "",
        showtime: ""
    })
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" exact>
                    <HomePage />
                </Route>
                <Route path="/filme/:filmId" exact>
                    <SessionsPage />
                </Route>
                <Route path="/assentos/:assentosId" exact>
                    <SeatsPage setReservationData={setReservationData} />
                </Route>
                <Route path="/sucesso" exact>
                    <SuccessPage reservationData={reservationData} />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
