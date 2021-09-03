import "./style.css"
import { Link } from "react-router-dom"

export default function Showtime({ name, id }) {
    return (
        <Link to={`/sessao/${id}`}>
            <button className="showtime">
                {name}
            </button>
        </Link>
    )
}