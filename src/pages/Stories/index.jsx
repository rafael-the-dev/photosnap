import Card from '../../components/Card';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';
import './styles.scss';
import { useEffect, useMemo, useState, useRef } from 'react';

const lazyLoad = () => {
    return (
        <>
            <Card image="rage-of-the-sea.jpg" name="The mountains" author="by John Appleseed" cardLink="/" />
            <Card image="running-free.jpg" name="Sunset Cityscapes" author="by Benjamin Cruz" cardLink="/" />
            <Card image="behind-the-waves.jpg" name="18 Days Voyage" author="by Alexei Borodin" cardLink="/" />
            <Card image="calm-waters.jpg" name="Architecturals" author="by Samantha Brooke" cardLink="/" />
            <Card image="milky-way.jpg" name="The mountains" author="by John Appleseed" cardLink="/" />
            <Card image="dark-forest.jpg" name="Sunset Cityscapes" author="by Benjamin Cruz" cardLink="/" />
            <Card image="somwarpet.jpg" name="18 Days Voyage" author="by Alexei Borodin" cardLink="/" />
            <Card image="land-of-dreams.jpg" name="Architecturals" author="by Samantha Brooke" cardLink="/" />
        </>
    );
};

const firstCardsLoad = () => {
    return (
        <>
            <Card image="mountains.jpg" name="The mountains" author="by John Appleseed" cardLink="/" />
            <Card image="cityscapes.jpg" name="Sunset Cityscapes" author="by Benjamin Cruz" cardLink="/" />
            <Card image="18-days-voyage.jpg" name="18 Days Voyage" author="by Alexei Borodin" cardLink="/" />
            <Card image="architecturals.jpg" name="Architecturals" author="by Samantha Brooke" cardLink="/" />
            <Card image="world-tour.jpg" name="The mountains" author="by John Appleseed" cardLink="/" />
            <Card image="unforeseen-corners.jpg" name="Sunset Cityscapes" author="by Benjamin Cruz" cardLink="/" />
            <Card image="king-on-africa.jpg" name="18 Days Voyage" author="by Alexei Borodin" cardLink="/" />
            <Card image="trip-to-nowhere.jpg" name="Architecturals" author="by Samantha Brooke" cardLink="/" />
        </>
    );
};

const Stories = () => {
    const [ value, setValue ] = useState('');
    const storiesRef = useRef(null);

    const firstCardsLoadMemo = useMemo(() => {
        return firstCardsLoad();
    }, []);

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setValue(lazyLoad());
        }, 3000);

        return () => clearInterval(timeOut);
    }, [ ]);

    return (
        <div>
            <Header pageRef={storiesRef} />
            <div ref={storiesRef}>
                <main className="px-xl">
                    <section className="highlight">
                        <div className="highlight__illustration"></div>
                        <div className="highlight__content">
                            <h1 className="highlight__title">
                                Hazy full<br />moon of<br />appalachia
                            </h1>
                            <p className="highlight__description">
                                The dissected plateau area, while not actually made up of 
                                geological mountains, is popularly called "mountains," especially 
                                in eastern Kentucky and West Virginia, and while the ridges are 
                                not high, the terrain is extremely rugged.
                            </p>
                            <Link to="/" className="highlight__link">
                                Read the story <i className="section__content-link--icon"></i>
                            </Link>
                        </div>
                    </section>
                    <section className="cards-section">
                        { firstCardsLoadMemo }
                        {
                            value 
                        }
                    </section>
                </main>
                <Footer />
            </div>
            
        </div>
    );
};

export default Stories;