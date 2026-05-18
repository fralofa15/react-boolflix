import { useState } from "react";
function Navbar({ onSearch }) {

    const [search, setSearch] = useState("");

    function handleSearch(event){
        setSearch(event.target.value)
    }
    
    console.log(search);

    function handleSubmit(event){
        event.preventDefault();
        onSearch(search)
    }


    return (
        <header className="navbar navbar-dark bg-dark px-4 py-3">
            <div className="container-fluid">
                <h1 className="text-danger m-0">BOOLFLIX</h1>

                <form className="d-flex" onSubmit={handleSubmit}>
                    <input
                        className="form-control me-2"
                        type="text"
                        placeholder="Cerca un film"
                        value={search}
                        onChange={handleSearch}
                    />

                    <button className="btn btn-danger" type="submit">
                        Cerca
                    </button>
                </form>
            </div>
        </header>
    );
}
export default Navbar