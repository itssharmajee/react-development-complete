const Service = () => {

    return (
        <div className="servie-container">
            <section className="hero">
                <div className="hero-content">
                    <h1>Welcome to Our Services</h1>
                    <p>We provide top-notch services tailored to your needs.</p>
                </div>
            </section>

            <section className="services">
                <div className="service-card">
                    <h2>Web Development</h2>
                    <p>We build custom websites that look great and function perfectly.</p>
                    <a href="#">Learn More</a>
                </div>
                <div className="service-card">
                    <h2>App Development</h2>
                    <p>Developing mobile apps that take your business to the next level.</p>
                    <a href="#">Learn More</a>
                </div>
                <div className="service-card">
                    <h2>SEO Optimization</h2>
                    <p>Boost your online presence with our SEO optimization services.</p>
                    <a href="#">Learn More</a>
                </div>
            </section>
        </div>
    )
}

export default Service;