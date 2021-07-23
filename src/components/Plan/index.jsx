import { Link } from "react-router-dom";
import './styles.scss';

const Plan = ({ plan, customClass }) => {
    return (
        <article className={`plan ${customClass ? 'plan--pro' : ''}`}>
            <div className={`plan__content ${customClass ? 'plan__content--pro' : ''}`}>
                <h2 className="plan__name">{ plan.name }</h2>
                <p className="plan__description">{ plan.description }</p>
                <h3 className="plan__price plan__price--tablet">$ { plan.price }</h3>
                <Link to={ plan.url } className={`plan__link  
                    ${customClass ? 'plan__link--pro' : ''}`}>
                    pick plan
                </Link>
            </div>
            <div className="plan__content--tablet">
                <h3 className="plan__price">{ plan.price }</h3>
            </div>
        </article>
    );
};

export default Plan;