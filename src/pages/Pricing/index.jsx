import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import './styles.scss';

const Pricing = () => {
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
                <Banner />
            </main>
            <Footer />
        </>
    );
};

export default Pricing;