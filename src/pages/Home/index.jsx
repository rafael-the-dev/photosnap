import Header from '../../components/Header';
import { Link } from 'react-router-dom';
import './styles.scss';
import Card from '../../components/Card';
import Footer from '../../components/Footer';

const Home = () => {
    
    return (
        <>
            <Header />
            <main className="px-xl">
                <section className="section hero">
                    <div className="section__illustration hero__illustration"></div>
                    <div className="hero__content section__content">
                        <h1 className="section__content-title">
                            Create and<br/>
                            share your<br/>
                            photo stories
                        </h1>
                        <p className="section__content-description">
                            The dissected plateau area, while not actually made up of geological 
                            mountains, is popularly called "mountains," especially in eastern 
                            Kentucky and West Virginia, and while the ridges are not high, the 
                            terrain is extremely rugged.
                        </p>
                        <Link to="/" className="section__content-link hero__content-link">
                            Read the story <i className="section__content-link--icon hero__content-link"></i>
                        </Link>
                    </div>
                </section>
                <section className="section stories">
                    <div className="section__illustration stories__illustration"></div>
                    <div className="stories__content section__content">
                        <h1 className="section__content-title">
                            Beautiful<br/>
                            Stories<br/>
                            Every time
                        </h1>
                        <p className="section__content-description">
                            We provide design templates to ensure your stories look terrific. 
                            Easily add photos, text, embed maps and media from other networks. 
                            Then share your story with everyone.
                        </p>
                        <Link to="/" className="section__content-link stories__content-link">
                            Read the story <i className="section__content-link--icon stories__content-link"></i>
                        </Link>
                    </div>
                </section>
                <section className="section design">
                    <div className="section__illustration design__illustration"></div>
                    <div className="design__content section__content">
                        <h1 className="section__content-title">
                            Designed for<br/>
                            everyone
                        </h1>
                        <p className="section__content-description">
                            Photosnap can help you create stories that resonate with your 
                            audience.  Our tool is designed for photographers of all 
                            levels, brands, businesses you name it. 
                        </p>
                        <Link to="/" className="section__content-link design__content-link">
                            Read the story <i className="section__content-link--icon design__content-link"></i>
                        </Link>
                    </div>
                </section>
                <section className="cards-section">
                    <Card image="mountains.jpg" name="The mountains" author="by John Appleseed" cardLink="/" />
                    <Card image="cityscapes.jpg" name="Sunset Cityscapes" author="by Benjamin Cruz" cardLink="/" />
                    <Card image="18-days-voyage.jpg" name="18 Days Voyage" author="by Alexei Borodin" cardLink="/" />
                    <Card image="architecturals.jpg" name="Architecturals" author="by Samantha Brooke" cardLink="/" />
                </section>
                <section className="service">
                    <article className="service__card">
                        <h2 className="service__card-title service__card-title--responsive">
                            100% Responsive
                        </h2>
                        <p className="service__card-description">
                            No matter which the device you’re on, our site is fully responsive 
                            and stories look beautiful on any screen.
                        </p>
                    </article>
                    <article className="service__card">
                        <h2 className="service__card-title service__card-title--limitless">
                            No Photo Upload Limit
                        </h2>
                        <p className="service__card-description">
                            Our tool has no limits on uploads or bandwidth. Freely upload in bulk 
                            and share all of your stories in one go.
                        </p>
                    </article>
                    <article className="service__card">
                        <h2 className="service__card-title service__card-title--embed">
                            Available to Embed
                        </h2>
                        <p className="service__card-description">
                            Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, 
                            Google Maps, and more. 
                        </p>
                    </article>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Home;