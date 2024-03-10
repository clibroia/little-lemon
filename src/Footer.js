import {Link} from 'react-router-dom';

function Footer() {
    return(
        <footer>
            <div className="footer-logo-container">
                <img src={`${window.location.origin}/Little Lemon logo v2.png`} alt="Little Lemon logo"/>
            </div>
            <div className="navigation">
                <h3 className="footer-heading">Navigation</h3>
                <ul className="footer-menu">
                    <li><Link to="/" className="nav-item">Home</Link></li>
                    <li>About</li>
                    <li>Menu</li>
                    <li><Link to="/booking-page" className="nav-item">Reservations</Link></li>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul>
            </div>
            <div className="contacts">
                <h3 className="footer-heading">Contacts</h3>
                <ul className="footer-menu">
                    <li>Address</li>
                    <li>Phone number</li>
                    <li>email</li>
                </ul>
            </div>
            <div className="social">
                <h3 className="footer-heading">Social media</h3>
                <ul className="footer-menu">
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>X</li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;