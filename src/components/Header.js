import Nav from './Nav';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/");
    }
    return(
        <header className="navigation-bar">
            <img
                src={`${window.location.origin}/Little Lemon logo.svg`} 
                onClick={handleClick}
                alt="Little Lemon logo"
                className="header-logo"
            />
            <Nav />
        </header>
    );
}

export default Header;