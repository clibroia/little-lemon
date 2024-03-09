/*TODO - import*/

function Footer() {
    return(
        <footer>
            <div className="logo-container">
                <img src={`${window.location.origin}/Little Lemon logo v2.png`} alt="Little Lemon logo"/>
            </div>
            <div className="navigation">
                <h3>Navigation</h3>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li>About</li>
                    <li>Menu</li>
                    <li><a href="#">Reservations</a></li>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul>
            </div>
            <div className="contacts">
                <h3>Contacts</h3>
                <ul>
                    <li>Address</li>
                    <li>Phone number</li>
                    <li>email</li>
                </ul>
            </div>
            <div className="social">
                <h3>Social media</h3>
                <ul>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>X</li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;