import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-solid-svg-icons";

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    {/* Column 1 */}
                    <ul>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Location & Hours</a></li>
                        <li><a href="/faq">FAQ</a></li>
                    </ul>

                    {/* Column 2 - stay connected*/}
                    <ul className="social">
                        {/* <li><a href="/fb"><FontAwesomeIcon icon={faFacebook} /></a></li>
                <li><a href="/ig"><FontAwesomeIcon icon={faInstagram} /></a></li>  
                <li><a href="/twitter"><FontAwesomeIcon icon={faTwitter} /></a></li> */}
                    </ul>

                    {/* Bottom Row */}
                    <ul>
                        <li>&copy;{new Date().getFullYear()} Flour Power</li>
                        <li><a href="/privacy">Privacy Policy</a></li>
                        <li><a href="/terms">Terms of Service</a></li>
                        <li><a href="/personal-information">Do Not Share My Personal Information</a></li>
                    </ul>
                </div>

                {/* <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} Flour Power
                    </p>
                </div> */}
            </div>
        </div>
    );
}

export default Footer;

export default Footer;
