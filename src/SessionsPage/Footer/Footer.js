import "./style.css"
import MoviePoster from "../../HomePage/MoviePoster/MoviePoster"


export default function Footer({ posterURL, movieTitle, id, weekday, showtime}) {

    return (
        <footer>
            <ul><MoviePoster src={posterURL} alt={movieTitle} id={id} /></ul>
            <div className="footer-text">
                {movieTitle}
                <p>{weekday ? `${weekday} - ${showtime}` : ""}</p>
            </div>
        </footer>
    )
}