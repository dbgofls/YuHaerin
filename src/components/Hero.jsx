import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="hero__sky"></div>

            <div className="hero__ui">
                <h1 className="hero__title">START GAME</h1>
                <div className="hero__menu">
                    <div className="menu-item active">
                        <span className="cursor">▶</span>
                        <span className="menu-text">1 PLAYER</span>
                        <a href="#about" className="link-overlay" aria-label="1 Player"></a>
                    </div>
                    <div className="menu-item">
                        <span className="menu-text">2 PLAYERS</span>
                    </div>
                    <div className="menu-item">
                        <span className="menu-text">EXIT</span>
                    </div>
                </div>
            </div>

            <div className="hero__scene">
                {/* Background Trees */}
                <div className="scene-layer trees-back">
                    <div className="pixel-tree t1"></div>
                    <div className="pixel-tree t2"></div>
                    <div className="pixel-tree t3"></div>
                </div>

                {/* House & Windmill */}
                <div className="scene-layer main-elements">
                    <div className="pixel-house">
                        <div className="roof"></div>
                        <div className="chimney"></div>
                        <div className="door"></div>
                        <div className="window w1"></div>
                    </div>
                    <div className="pixel-windmill">
                        <div className="windmill-body"></div>
                        <div className="windmill-blades"></div>
                        <div className="door"></div>
                    </div>
                </div>

                {/* Fence */}
                <div className="scene-layer fence">
                    <div className="pixel-fence f1"></div>
                    <div className="pixel-fence f2"></div>
                    <div className="pixel-fence f3"></div>
                    <div className="pixel-fence f4"></div>
                </div>
            </div>

            <div className="hero__ground"></div>
        </section>
    );
};

export default Hero;
