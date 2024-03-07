/*TODO - import*/

import Nav from './Nav';

function Header() {
    return(
        <header className="navigation-bar">
            <img src={`${window.location.origin}/Little Lemon logo.svg`} alt="Little Lemon logo"/>
            <Nav />
        </header>
    );
}

export default Header;