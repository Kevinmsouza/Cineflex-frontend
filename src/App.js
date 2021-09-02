import "./css/reset.css";
import "./css/style.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header/Header";
import HomePage from "./HomePage";


export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" exact>
                    <HomePage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
