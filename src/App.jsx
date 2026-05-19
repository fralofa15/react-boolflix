import { useState } from "react";
import Navbar from "./assets/components/navbar";
import CardsDisplay from "./assets/components/cardsDisplay";

function App() {
  const apiKey = import.meta.env.VITE_API_KEY;

  const [movie, setMovie] = useState([]);

  function handleSearch(query) {
    const movieUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;
    const tvUrl = `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${query}`;

    Promise.all([
      fetch(movieUrl).then((res) => res.json()),
      fetch(tvUrl).then((res) => res.json())
    ])
      .then(([movieData, tvData]) => {
        const movieResults = movieData.results;
        const tvResults = tvData.results;

        const allResults = [...movieResults, ...tvResults];

        setMovie(allResults);
      });
  }

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <CardsDisplay movies={movie} />
    </>
  );
}

export default App;