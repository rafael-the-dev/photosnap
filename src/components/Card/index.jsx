import { useCallback, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Card = ({ image, author, name, cardLink }) => {
    const imageRef = useRef(null);

    const addImage = url => {
        import('../../assets/images/stories/' + url)
            .then(image => imageRef.current.src = image.default)
            .catch(console.log); 
    }

    const setImage = useCallback(width => {
        if(width >= 992) {
            addImage(`desktop/${image}`);
        } else if(width >= 501) {
            addImage(`tablet/${image}`);
        } else {
            addImage(`mobile/${image}`);
        }
    }, [ image ])

    useEffect(() => {
        setImage(window.innerWidth);

        window.addEventListener('resize', event => {
            setImage(event.target.innerWidth);
        })
    }, [ setImage ]);

    return (
        <article className="card" >
            <figure className="cart__image-container">
                <img ref={imageRef} src="" alt="" className="cart__image" />
            </figure>
            <div className="card__content">
                <h3 className="card__name">{  name }</h3>
                <p className="card__author">{  author }</p>
                <Link to={cardLink} className="card__link">
                    <span>Read story</span>
                    <span className="card__link-icon"></span>
                </Link>
            </div>
        </article>
    );
};

export default Card;