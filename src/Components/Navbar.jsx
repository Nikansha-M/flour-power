import "./Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";


function Navbar() {
    return (
        <div className="nav">
            <Link to="/" className="logo-container">
                <img src="Flour-Power-Logo-whitebg.png" className="logo" alt="Flour Power Bakery and Cafe logo" />
            </Link>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/menu">Menu</Link>
                </li>
                <li>
                    <Link to="/account"><FontAwesomeIcon icon={faUser} /></Link>
                </li>
                <li>
                    <Link to="/cart"><FontAwesomeIcon icon={faCartShopping} /></Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
