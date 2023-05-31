import React, {Component} from 'react';
class NavBar extends Component {
    render() {
        return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-style">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Logo Here</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/#">About</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/#">Menu</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/#">Contact Us</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/#">Sign In</a>
                    </li>
        
                 </ul>
                </div>
            </div>
            </nav>
        </React.Fragment>
        );
    }
}

export default NavBar;