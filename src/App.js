import "./css/reset.css";
import "./css/style.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Sessions from "./Sessions/Sessions";
import Session from "./Session/Session";
import Success from "./Success/Success";

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/filme/:filmId" exact>
                    <Sessions />
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
