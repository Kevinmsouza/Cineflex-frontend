import "./css/reset.css";
import "./css/style.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./Home";
import Movie from "./Movie";
import Session from "./Session";
import Success from "./Success";

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/filme/:filmId" exact>
                    <Movie />
                </Route>
                <Route path="/sessao/:sessionId" exact>
                    <Session />
                </Route>
                <Route path="/sucesso" exact>
                    <Success />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
