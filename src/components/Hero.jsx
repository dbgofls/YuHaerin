import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="about" className="hero">
            <div className="container hero__container">
                <h1 className="hero__title">
                    Creative <span className="highlight-pill">Web</span><br />
                    Design <span className="circle-icon">&</span> Art
                </h1>
                <p className="hero__subtitle">
                    Creating immersive digital experiences. Check out my works below.
                </p>

                {/* Decorative elements simulating the reference design */}
                <div className="deco-arrow"></div>
                <div className="deco-squiggle"></div>
            </div>
        </section>
    );
};

export default Hero;
