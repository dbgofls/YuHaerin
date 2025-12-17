import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="hero__container">
                <h1 className="hero__title">
                    PORTFOLIO<br />
                    GRAPHIC DESIGNER<br />
                    2025
                </h1>
                <p className="hero__subtitle">
                    INSERT COIN TO START
                </p>
                <a href="#about" className="start-btn">
                    START GAME
                </a>
            </div>
            <div className="hero__ground"></div>
        </section>
    );
};

export default Hero;
