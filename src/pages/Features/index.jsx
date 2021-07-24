import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './styles.scss';

const Features = () => {
    return (
        <>
            <Header />
            <main className="px-xl">
                <section className="section hero feature-hero">
                    <div className="section__illustration feature-hero__illustration"></div>
                    <div className="hero__content section__content">
                        <div className="section__division">
                            <h1 className="section__content-title hero__content-title">Features</h1>
                            <p className="section__content-description hero__content-description">
                                We make sure all of our features are designed to be loved by 
                                every aspiring and even professional photograpers who wanted 
                                to share their stories.
                            </p>
                            <span className="hero__bar"></span>
                        </div>
                    </div>
                </section>
                <section className="service features-service">
                    <article className="service__card features-service__card">
                        <h2 className="service__card-title service__card-title--responsive">
                            100% Responsive
                        </h2>
                        <p className="service__card-description">
                            No matter which the device you’re on, our site is fully responsive 
                            and stories look beautiful on any screen.
                        </p>
                    </article>
                    <article className="service__card features-service__card">
                        <h2 className="service__card-title service__card-title--limitless">
                            No Photo Upload Limit
                        </h2>
                        <p className="service__card-description">
                            Our tool has no limits on uploads or bandwidth. Freely upload in bulk 
                            and share all of your stories in one go.
                        </p>
                    </article>
                    <article className="service__card features-service__card">
                        <h2 className="service__card-title service__card-title--embed">
                            Available to Embed
                        </h2>
                        <p className="service__card-description">
                            Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, 
                            Google Maps, and more. 
                        </p>
                    </article>
                    <article className="service__card features-service__card">
                        <h2 className="service__card-title service__card-title--domain">
                            Custom Domain
                        </h2>
                        <p className="service__card-description">
                            With Photosnap subscriptions you can host your stories on your own 
                            domain. You can also remove our branding!
                        </p>
                    </article>
                    <article className="service__card features-service__card">
                        <h2 className="service__card-title service__card-title--boost">
                            Boost Your Exposure
                        </h2>
                        <p className="service__card-description">
                            Users that viewed your story or gallery can easily get notifed of 
                            new and featured stories with our built in mailing list.
                        </p>
                    </article>
                    <article className="service__card features-service__card">
                        <h2 className="service__card-title service__card-title--drag">
                            Drag & Drop Image
                        </h2>
                        <p className="service__card-description">
                            Easily drag and drop your image and get beautiful shots everytime. 
                            No over the top tooling to add friction to creating stories. 
                        </p>
                    </article>
                </section>
                <Banner />
            </main>
            <Footer />
        </>
    );
};

export default Features;