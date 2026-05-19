function Card({ cardMovie }) {

    const imageBaseUrl = import.meta.env.VITE_IMAGE_URL;

    return (
        <div className="card my-2 mx-3">
            <img src={`${imageBaseUrl}${cardMovie.poster_path}`} alt={cardMovie.title} />
        </div>
    );
}
export default Card;