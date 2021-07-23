import { Link } from 'react-router-dom';
import './styles.scss';

const Banner = () => {
    return (
        <section className="banner">
            <h2 className="banner__title">
                We're in beta<br/>get your invite<br/>today
            </h2>
            <Link to="/" className="section__content-link hero__content-link">
                Read the story <i className="section__content-link--icon hero__content-link"></i>
            </Link>
        </section>
    );
};

export default Banner;