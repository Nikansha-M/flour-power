import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-solid-svg-icons";

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        {/* Column 1 */}
                        <ul>
                            <li><a href="/about">About</a></li>
                            <li><a href="/contact">Location & Hours</a></li>
                            <li><a href="/faq">FAQ</a></li>
                        </ul>
                    </div>


                    {/* Column 2 - stay connected*/}
                    <div className="col">
                        <ul className="social">
                            {/* <li><a href="/fb"><FontAwesomeIcon icon={faFacebook} /></a></li>
                            <li><a href="/ig"><FontAwesomeIcon icon={faInstagram} /></a></li>
                            <li><a href="/twitter"><FontAwesomeIcon icon={faTwitter} /></a></li> */}
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div className="col">
                        <ul>
                            <li><a href="/privacy">Privacy Policy</a></li>
                            <li><a href="/terms">Terms of Service</a></li>
                            <li><a href="/personal-information">Do Not Share My Personal Information</a></li>
                        </ul>
                    </div>

                    <div className="copyright">
                        <ul>
                            <li>Copyright &copy; {new Date().getFullYear()} Flour Power Bakery & Cafe</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
