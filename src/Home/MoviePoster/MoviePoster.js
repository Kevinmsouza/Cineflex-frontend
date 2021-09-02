import "./style.css";

export default function MoviePoster({src, alt}) {
    return (
        <li className="movie" >
            <img src={src} alt={alt} />
        </li>
    )
}