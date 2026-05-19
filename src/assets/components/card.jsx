import CardDetails from "./cardDetails";
function Card({ cardMovie, onClickCard, selectedCardMovie }) {

    const imageBaseUrl = import.meta.env.VITE_IMAGE_URL;

    function handleCardClick() {
        onClickCard(cardMovie);
    }

    function isThisCardSelected() {
        if (selectedCardMovie === null) {
            return false;
        } else {
            return selectedCardMovie.id === cardMovie.id;
        }
    }

    function renderCardContent() {
        if (isThisCardSelected()) {
            return <CardDetails movie={cardMovie} />;
        } else {
            return (
                <img
                    src={`${imageBaseUrl}${cardMovie.poster_path}`}
                    alt={cardMovie.title}
                />
            );
        }
    }

    return (
        <div className="card my-2 mx-3 movie-card" onClick={handleCardClick}>
            {renderCardContent()}
        </div>
    );
}
export default Card;