import Card from "./card";
function CardsDisplay({ movies }) {
    return (
        <main className="bg-secondary">
            <div className="row">
                {movies.map((movie) => (
                    <div className="col-3 p-3" key={movie.id}>
                        <Card cardMovie={movie} />
                    </div>
                ))}
            </div>
        </main>
    );
}
export default CardsDisplay;