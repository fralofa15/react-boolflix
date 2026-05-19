import CardDetails from "./cardDetails";
import "../style/card.css";
function Card({ cardMovie }) {
    const imageBaseUrl = import.meta.env.VITE_IMAGE_URL;

    const cardTitle = cardMovie.title || cardMovie.name;


    return (
        <div className="card my-2 mx-3 movie-card">
            <img
                src={`${imageBaseUrl}${cardMovie.poster_path}`}
                alt={cardTitle}
            />

            <div className="movie-overlay">
                <CardDetails movie={cardMovie} />
            </div>
        </div>
    );
}
export default Card;