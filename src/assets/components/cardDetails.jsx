function CardDetails({ movie }) {
    if (movie === null) {
        return null;
    }

    return (
        <div className="container my-4">
            <h2>Titolo: {movie.title}</h2>
            <p>Voto: {movie.vote_average}</p>
            <p>Sinossi: {movie.overview}</p>
        </div>
    );
}
export default CardDetails;