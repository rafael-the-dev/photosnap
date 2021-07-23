import Logo from '../Logo';
import './styles.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header className="px-md px-lg header">
                <Logo />
                <nav className="header__navigation">
                    <ul className="header__list">
                        <li className="header__item">
                            <Link to="/stories" className="link header__link">Stories</Link>
                        </li>
                        <li className="header__item">
                            <Link to="/features" className="link header__link">Features</Link>
                        </li>
                        <li className="header__item">
                            <Link to="/" className="link header__link">Pricing</Link>
                        </li>
                    </ul>
                </nav>
                <button className="header__menu-button">
                    <span className="header__line"></span>
                    <span className="header__line"></span>
                </button>
                <Link to="/" className="header__invite-button">Get an invite</Link>
            </header>
        </>
    );
};

export default Header;