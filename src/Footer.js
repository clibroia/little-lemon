/*TODO - import*/

function Footer() {
    return(
        <footer>
            <img src={`${window.location.origin}/Little Lemon logo v2.png`} alt="Little Lemon logo"/>
            <h3>Navigation</h3>
            <ul>
                <li><a href="#">Home</a></li>
                <li>About</li>
                <li>Menu</li>
                <li><a href="#">Reservations</a></li>
                <li>Order Online</li>
                <li>Login</li>
            </ul>
            <h3>Contacts</h3>
            <ul>
                <li>Address</li>
                <li>Phone number</li>
                <li>email</li>
            </ul>
            <h3>Social media links</h3>
            <ul>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>X</li>
            </ul>
        </footer>
    );
}

export default Footer;