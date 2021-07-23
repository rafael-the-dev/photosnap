import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import './styles.scss';
import Plan from '../../components/Plan';
import { useEffect, useMemo, useState } from 'react';

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
            name: 'Basic',
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

const plans = duration => {
    return (
        <div>
            <Plan plan={prices[duration].basic} />
            <Plan plan={prices[duration].pro} customClass="plan--pro" />
            <Plan plan={prices[duration].business} />
        </div>
    );
};

const Pricing = () => {
    const [ duration, setDuration ] = useState('monthly');

    /*const plansMemo = useMemo(() => {
        return plans(duration);
    }, [ duration ]); */

    useEffect(() => {
        setDuration(d => 'monthly');
    }, []);

    return (
        <>
            <Header />
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
                    <div className="plans-section__division">
                        <Plan plan={prices[duration].basic} />
                        <Plan plan={prices[duration].pro} customClass="plan--pro"/>
                        <Plan plan={prices[duration].business} />
                    </div>
                </section>
                <Banner />
            </main>
            <Footer />
        </>
    );
};

export default Pricing;