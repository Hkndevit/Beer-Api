import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    return ( 
        <section className="navbar">
            <nav >
                <Link to="/"><img src="src/assets/Bilder/Logo.svg" alt="" /></Link>
            </nav>
        </section>
    );
}

export default Navbar;