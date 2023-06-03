import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <ul>
                <li>&#169;2023</li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact Us</a></li>
                <li><a href="/faq">FAQ</a></li>
            </ul>
            <ul className="social">
                <li><a href="/fb">Facebook</a></li>
                <li><a href="/ig">Instagram</a></li>  
                <li><a href="/twitter">Twitter</a></li>
            </ul>   
            <ul>
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/terms">Terms of Service</a></li>    
                <li><a href="/personal-information">Do Not Share My Personal Information</a></li>
            </ul>
        </div>
    );
}

export default Footer;