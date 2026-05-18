function App() {
  const apiKey = import.meta.env.VITE_API_KEY;

  fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=ritorno+al+futuro`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}
export default App
