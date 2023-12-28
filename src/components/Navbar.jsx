import { NavLink } from "react-router-dom";
import './Navbar.css';
const Navbar = () => {
    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-dark mt-5">
                <a className="navbar-brand text-warning ms-3" href="/">Moviemaniac</a>
                <button className="navbar-toggler" type="button" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse d-xl-flex justify-content-xl-end" >
                    <nav className="navbar-nav me-3" >
                        <NavLink className="text-white nav-link me-3" to="/">Popular<i className="bi bi-fire "></i></NavLink>
                        <NavLink className="text-white nav-link me-3" to="/top_rated" >Top Rated<i className="bi bi-star-fill"></i></NavLink>
                        <NavLink className="text-white nav-link me-3" to="/upcoming">Upcoming<i className="bi bi-calendar4-event"></i></NavLink>
                    </nav>
                </div>
            </nav >
        

    )
}
export default Navbar;