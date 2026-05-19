function CardDetails({ movie }) {
    return (
        <div className="card-body text-white">
            <h5>{movie.title}</h5>
            <p>Voto: {movie.vote_average}</p>
            <p>{movie.overview}</p>
        </div>
    );
}
export default CardDetails;