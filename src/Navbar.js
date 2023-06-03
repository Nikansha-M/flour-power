import './Navbar.css';

function Navbar() {
    return (
        <div className="nav">
            <a href="/" className="image-cropper"><img src="Flour-Power-Logo-whitebg.png" className="logo" alt="Sweet Dreams Bakery and Cafe logo of a cake in cake stand" /></a>
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/contact">Contact Us</a></li>
                <li><a href="/login">Sign In</a></li>
                <li><a href="/cart">Shopping Cart</a></li>
            </ul>
        </div>
    );
}

export default Navbar;