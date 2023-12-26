

const Navbar = () => {
    return (

            <nav className="navbar navbar-expand-lg navbar-light bg-dark mt-5">
                <a className="navbar-brand text-warning ms-3" href="/">Moviemaniac</a>
                <button className="navbar-toggler" type="button"  aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse d-xl-flex justify-content-xl-end" >
                    <div className="navbar-nav me-3" >
                        <a className="nav-link active text-white"  aria-current="page" href="#popular">Popular<i className="bi bi-fire "></i></a>
                        <a className="nav-link text-white"  href="#top_rated" >Top Rated<i className="bi bi-star-fill"></i></a>
                        <a className="nav-link text-white"  href="#upcoming">Upcoming<i className="bi bi-calendar4-event"></i></a>
                    </div>
                </div>
            </nav >

    )
}
export default Navbar;