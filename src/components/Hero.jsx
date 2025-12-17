import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="hero__sky">
                <div className="moon-smile">
                    <div className="eye left"></div>
                    <div className="eye right"></div>
                    <div className="mouth"></div>
                </div>
                <div className="star s1"></div>
                <div className="star s2"></div>
                <div className="star s3"></div>
            </div>

            <div className="hero__ui">
                <h1 className="hero__title">
                    <span className="title-line">PORTFOLIO</span>
                    <span className="subtitle-line">WEB DESIGNER</span>
                    <span className="year-line">2025</span>
                </h1>

                <a href="#about" className="start-btn-pill">PLAY ►</a>
            </div>

            <div className="hero__scene">
                {/* Forest Background */}
                <div className="forest-bg">
                    <div className="tree-bg tb1"></div>
                    <div className="tree-bg tb2"></div>
                    <div className="tree-bg tb3"></div>
                </div>

                {/* Big Foreground Trees */}
                <div className="tree-fg left-tree">
                    <div className="leaves"></div>
                    <div className="trunk">
                        <div className="hollow"></div>
                    </div>
                </div>
                <div className="tree-fg right-tree">
                    <div className="leaves"></div>
                    <div className="trunk"></div>
                    <div className="flowers"></div>
                </div>

                {/* Brick Wall Element */}
                <div className="brick-wall"></div>

                {/* Ground */}
                <div className="ground-path"></div>
            </div>
        </section>
    );
};

export default Hero;
