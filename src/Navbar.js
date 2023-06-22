import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";


function Navbar() {
    return (
        <div className="nav">
            <a href="/" className="logo-container">
                <img src="Flour-Power-Logo-whitebg.png" className="logo" alt="Sweet Dreams Bakery and Cafe logo" />
            </a>
            <ul>
                <li>
                    <a href="/home">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/menu">Menu</a>
                </li>
                <li>
                    <a href="/account"><FontAwesomeIcon icon={faUser} /></a>
                </li>
                <li>
                    <a href="/cart"><FontAwesomeIcon icon={faCartShopping} /></a>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
