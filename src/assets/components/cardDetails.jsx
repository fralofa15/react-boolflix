function CardDetails({ movie }) {
    const voteFromZeroToFive = movie.vote_average / 2;

    function renderStars() {
        const stars = [];

        for (let starNumber = 1; starNumber <= 5; starNumber++) {
            const isFullStar = voteFromZeroToFive >= starNumber;
            const isHalfStar = voteFromZeroToFive >= starNumber - 0.5;

            if (isFullStar) {
                stars.push(<i key={starNumber} className="bi bi-star-fill text-warning"></i>);
            } else if (isHalfStar) {
                stars.push(<i key={starNumber} className="bi bi-star-half text-warning"></i>);
            } else {
                stars.push(<i key={starNumber} className="bi bi-star text-warning"></i>);
            }
        }

        return stars;
    }

    return (
        <div className="card-body text-white">
            <h5>{movie.title}</h5>
            <p><strong>Titolo originale:</strong> {movie.original_title}</p>
            <p><strong>Lingua:</strong> {movie.original_language}</p>
            <p><strong>Voto:</strong> {renderStars()}</p>
            <p>{movie.overview}</p>
        </div>
    );
}

export default CardDetails;