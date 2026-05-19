import { useState, useEffect } from "react";
import Navbar from "./assets/components/navbar";
import CardsDisplay from "./assets/components/cardsDisplay";
import CardDetails from "./assets/components/cardDetails";
function App() {

  function handleSearch(query) {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data.results);
      });

    console.log("ricerca effettuata", query);
  }

  const [movie, setMovie] = useState([]);
  const [movieDetails, setMovieDetails] = useState(null);

  console.log(movieDetails);
  

  const apiKey = import.meta.env.VITE_API_KEY;

  return (
    <>
      <Navbar onSearch={handleSearch}/>
      <CardsDisplay movies={movie} onSelectMovie={setMovieDetails} selectedMovie={movieDetails} />
    </>
  );
}
export default App
