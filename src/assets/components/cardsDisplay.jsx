import Card from "./card";
function CardsDisplay({ movies, onSelectMovie, selectedMovie }) {
    return (
        <main className="container bg-secondary">
            <div className="row">
                {movies.map((movie) => (
                    <div className="col-3 p-3" key={movie.id}>
                        <Card cardMovie={movie} onClickCard={onSelectMovie} selectedCardMovie={selectedMovie} />
                    </div>
                ))}
            </div>
        </main>
    );
}
export default CardsDisplay