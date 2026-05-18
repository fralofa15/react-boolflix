function Navbar() {
    return (
        <header className="navbar navbar-dark bg-dark px-4 py-3">
            <div className="container-fluid">
                <h1 className="text-danger m-0">BOOLFLIX</h1>

                <form className="d-flex">
                    <input
                        className="form-control me-2"
                        type="text"
                        placeholder="Cerca un film"
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