import "./css/reset.css";
import "./css/style.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header/Header";
import HomePage from "./HomePage/HomePage";
import SessionsPage from "./SessionsPage/SessionsPage";
import SessionPage from "./SessionPage/SessionPage";
import SuccessPage from "./SuccessPage/SuccessPage";

export default function App() {
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
                <Route path="/sessao/:sessionId" exact>
                    <SessionPage />
                </Route>
                <Route path="/sucesso" exact>
                    <SuccessPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
