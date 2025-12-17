import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about">
            {/* Background Clouds */}
            <div className="cloud c1"></div>
            <div className="cloud c2"></div>
            <div className="cloud c3"></div>

            <div className="window-frame">
                <div className="window-header">
                    <div className="win-btn">_</div>
                    <div className="win-btn">□</div>
                    <div className="win-btn">x</div>
                </div>

                <div className="window-content">
                    {/* Resume Grid Layout */}
                    <div className="resume-grid">

                        {/* Section: Profile / Intro */}
                        <div className="resume-section full-width">
                            <h2>Yu Haerin</h2>
                            <p className="subtitle">GRAPHIC DESIGNER & LOGO CREATOR</p>
                            <p className="intro-text">
                                Passionate about all things graphic design with a great sense of curiosity.
                            </p>
                        </div>

                        {/* Left Column */}
                        <div className="resume-col">
                            <div className="resume-group">
                                <h3>EDUCATION</h3>
                                <div className="resume-item">
                                    <span className="year">2016-2017</span>
                                    <div className="details">
                                        <strong>Bachelor of Arts (B.A)</strong>
                                        <span>Design University</span>
                                    </div>
                                </div>
                                <div className="resume-item">
                                    <span className="year">2019-2020</span>
                                    <div className="details">
                                        <strong>Master of Design (M.Des)</strong>
                                        <span>Design University</span>
                                    </div>
                                </div>
                            </div>

                            <div className="resume-group">
                                <h3>CONTACT</h3>
                                <ul className="resume-list">
                                    <li>Phone: 010-1234-5678</li>
                                    <li>Email: example@email.com</li>
                                </ul>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="resume-col">
                            <div className="resume-group">
                                <h3>EXPERIENCE</h3>
                                <div className="resume-item">
                                    <strong>Freelance Designer</strong>
                                    <span>2020 - Present</span>
                                </div>
                                <div className="resume-item">
                                    <strong>Graphic Designer</strong>
                                    <span>Creative Studio</span>
                                </div>
                            </div>

                            <div className="resume-group">
                                <h3>SKILLS</h3>
                                <div className="skill-columns">
                                    <ul className="resume-list">
                                        <li>Branding</li>
                                        <li>Typography</li>
                                        <li>Color Theory</li>
                                        <li>Logo Design</li>
                                    </ul>
                                    <ul className="resume-list">
                                        <li>Photoshop</li>
                                        <li>Illustrator</li>
                                        <li>Figma</li>
                                        <li>Blender</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
