import Navbar from "./assets/components/navbar";
function App() {

  function handleSearch(query) {
    console.log("ricerca effettuata", query);
  }

  const apiKey = import.meta.env.VITE_API_KEY;

  fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=ritorno+al+futuro`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
  return (
    <>
      <Navbar onSearch={handleSearch}/>
    </>
  );
}
export default App
