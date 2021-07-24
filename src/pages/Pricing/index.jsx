import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import './styles.scss';
import Plan from '../../components/Plan';
import { useEffect, useMemo, useRef, useState } from 'react';

const prices = {
    monthly: {
        basic: {
            name: 'Basic',
            description: 'Includes basic usage of our platform. Recommended for new and aspiring photographers.',
            price: "19.00",
            url: '/'
        },
        pro: {
            name: 'Pro',
            description: 'More advanced features available. Recommended for photography veterans and professionals.',
            price: "39.00",
            url: '/'
        },
        business: {
            name: 'Business',
            description: 'Additional features available such as more detailed metrics. Recommended for business owners.',
            price: "99.00",
            url: '/'
        }
    },
    yearly: {
        basic: {
            name: 'Basic',
            description: 'Includes basic usage of our platform. Recommended for new and aspiring photographers.',
            price: "190.00",
            url: '/'
        },
        pro: {
            name: 'Pro',
            description: 'More advanced features available. Recommended for photography veterans and professionals.',
            price: "390.00",
            url: '/'
        },
        business: {
            name: 'Business',
            description: 'Additional features available such as more detailed metrics. Recommended for business owners.',
            price: "990.00",
            url: '/'
        }
    }
};

const Row = ({ title, hasBasic, hasPro, hasBusiness}) => {
    return (
        <li className="comparing-section__item">
            <label className="comparing-section__caption">
                { title }
            </label>
            <ul className="comparing-section__row">
                <li  className="comparing-section__td">
                    <span className="comparing-section__name">Basic</span>
                    { hasBasic ? <span className="comparing-section__check"></span> : ''}
                </li>
                <li  className="comparing-section__td">
                    <span className="comparing-section__name">Pro</span>
                    { hasPro ? <span className="comparing-section__check"></span> : ''}
                </li>
                <li  className="comparing-section__td">
                    <span className="comparing-section__name">Business</span>
                    { hasBusiness ? <span className="comparing-section__check"></span> : ''}
                </li>
            </ul>
        </li>
    );
};

const Pricing = () => {
    const [ duration, setDuration ] = useState('monthly');
    const monthlyRef = useRef(null);
    const yearlyRef = useRef(null);
    const toggleButtonRef = useRef(null);
    const [ index, setIndex ] = useState(0);
    const types = [
        {
            name: 'monthly',
            ref: monthlyRef
        },
        {
            name: 'yearly',
            ref: yearlyRef
        }
    ];
    const headerMemo = useMemo(() => {
        return <Header />
    }, [ ]); 

    const bannerMemo = useMemo(() => {
        return <Banner />;
    }, [ ]); 

    const footerMemo = useMemo(() => {
        return <Footer />;
    }, [ ]); 

    useEffect(() => {
        setDuration(d => 'monthly');
        setIndex(i => 0)

        return () => { setDuration(d => 'monthly'); setIndex(i => 0)};
    }, []);

    const clickHandler = event => {
        event.stopPropagation();
        types[index].ref.current.classList.toggle('active');
        toggleButtonRef.current.classList.toggle('switcher');
        let temp = index;

        if(index === 0) {
            temp = 1;
        } else {
            temp = 0;
        }
        setDuration(d => types[temp].name);
        types[temp].ref.current.classList.toggle('active');
        setIndex(i => temp);
        
    };

    return (
        <>
            { headerMemo }
            <main className="px-xl">
                <section className="section pricing-hero">
                    <div className="section__illustration pricing-hero__illustration"></div>
                    <div className="hero__content section__content">
                        <h1 className="section__content-title hero__content-title">Pricing</h1>
                        <p className="section__content-description hero__content-description">
                            Create a your stories, Photosnap is a platform for photographers and 
                            visual storytellers. It’s the simple way to create and share 
                            your photos.
                        </p>
                    </div>
                </section>
                <section className="plans-section">
                    <div className="plans-section__controller">
                        <span 
                            onClick={clickHandler} 
                            ref={monthlyRef} 
                            className="active plans-section__duration">
                            Monthly
                        </span>
                        <button 
                            ref={toggleButtonRef} 
                            onClick={clickHandler} 
                            className="plans-section__toggle-button">
                            <span className="toggle"></span>
                        </button>
                        <span 
                            onClick={clickHandler} 
                            ref={yearlyRef} 
                            className="plans-section__duration">
                            Yearly
                        </span>
                    </div>
                    <div className="plans-section__division">
                        <Plan plan={prices[duration].basic} />
                        <Plan plan={prices[duration].pro} customClass="plan--pro"/>
                        <Plan plan={prices[duration].business} />
                    </div>
                </section>
                <section className="comparing-section">
                    <h2 className="comparing-section__title">Compare</h2>
                    <ul className="comparing-section__table">
                        <Row title="The features" />
                        <Row title="Unlimited story posting" hasBasic hasPro hasBusiness />
                        <Row title="Unlimited photo upload" hasBasic hasPro hasBusiness />
                        <Row title="Embedding custom content" hasPro hasBusiness />
                        <Row title="Customize metadata" hasPro hasBusiness />
                        <Row title="Advanced metrics" hasBusiness />
                        <Row title="Photo downloads" hasBusiness />
                        <Row title="Search engine indexing" hasBusiness />
                        <Row title="Custom analytics" hasBusiness />
                    </ul>
                </section>
                { bannerMemo }
            </main>
            { footerMemo }
        </>
    );
};

export default Pricing;