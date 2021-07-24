import Logo from '../Logo';
import './styles.scss';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

const Header = () => {
    const navigationRef = useRef(null);
    const firstLineRef = useRef(null);
    const secondLineRef = useRef(null);

    useEffect(() => {
        window.addEventListener('resize', event => {
            if(event.target.innerWidth > 565) {
                navigationRef.current.classList.remove('header__navigation--mobile');
                firstLineRef.current.classList.remove('header__line--first');
                secondLineRef.current.classList.remove('header__line--second');
            }
        });

        return () => window.onresize = null;
    }, []);

    const clickHandler = () => {
        navigationRef.current.classList.toggle('header__navigation--mobile');
        firstLineRef.current.classList.toggle('header__line--first');
        secondLineRef.current.classList.toggle('header__line--second');
    };

    return (
        <>
            <header className="px-md px-lg header">
                <Logo />
                <nav ref={navigationRef} className="header__navigation">
                    <ul className="header__list">
                        <li className="header__item">
                            <Link to="/stories" className="link header__link">Stories</Link>
                        </li>
                        <li className="header__item">
                            <Link to="/features" className="link header__link">Features</Link>
                        </li>
                        <li className="header__item">
                            <Link to="/pricing" className="link header__link">Pricing</Link>
                        </li>
                    </ul>
                    <Link to="/" className="header__invite-button header__invite-button--mobile">
                        Get an invite
                    </Link>
                </nav>
                <button onClick={clickHandler} className="header__menu-button">
                    <span ref={firstLineRef} className="header__line"></span>
                    <span ref={secondLineRef} className="header__line"></span>
                </button>
                <Link to="/" className="header__invite-button">Get an invite</Link>
            </header>
        </>
    );
};

export default Header;