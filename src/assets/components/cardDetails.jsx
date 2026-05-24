function CardDetails({ movie }) {
    const voteFromZeroToFive = movie.vote_average / 2;

    const title = movie.title || movie.name;
    const originalTitle = movie.original_title || movie.original_name;

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

        const languageToCountry = {
        en: "gb",
        it: "it",
        fr: "fr",
        es: "es",
        de: "de",
        ja: "jp",
        ko: "kr",
        zh: "cn",
        pt: "pt",
        ru: "ru",
    };

    const countryCode = languageToCountry[movie.original_language];

    function renderFlag() {
        if (countryCode) {
            return (
                <img
                    src={`https://flagcdn.com/w40/${countryCode}.png`}
                    alt={movie.original_language}
                    style={{ width: "30px" }}
                />
            );
        }

        return <span>{movie.original_language}</span>;
    }

    return (
        <div className="card-body text-white">
            <h5>{title}</h5>
            <p><strong>Titolo originale:</strong> {originalTitle}</p>
            <p><strong>Lingua:</strong> {renderFlag()}</p>
            <p><strong>Voto:</strong> {renderStars()}</p>
            <p>{movie.overview}</p>
        </div>
    );
}

export default CardDetails;