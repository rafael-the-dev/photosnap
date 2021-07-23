import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logo.svg';
import './styles.scss';

const Logo = () => {
    return (
        <Link to="/" className="logo-container">
            <img src={logo} alt="" className="logo" />
        </Link>
    );
};

export default Logo;