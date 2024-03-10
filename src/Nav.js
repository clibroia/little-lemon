import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
    return(
        <nav>
            <ul className="header-menu">
                <li><Link to="/" className="nav-item">Home</Link></li>
                <li>About</li>
                <li>Menu</li>
                <li><Link to="/booking-page" className="nav-item">Reservations</Link></li>
                <li>Order Online</li>
                <li>Login</li>
            </ul>
        </nav>
    );
}

export default Nav;