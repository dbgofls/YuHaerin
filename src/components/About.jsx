import React from 'react';
import './About.css';
import profileImg from '../assets/profile.jpg';

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
                            <div className="profile-header">
                                <div className="profile-photo">
                                    <img src={profileImg} alt="Yu Haerin Profile" />
                                </div>
                                <div className="profile-info">
                                    <h2>Yu Haerin</h2>
                                    <p className="subtitle">STUDENT OF INFORMATICS & PRODUCT DESIGN AT CHOSUN UNIVERSITY</p>
                                    <p className="intro-text">
                                        I have a great passion and curiosity for web design.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Left Column */}
                        <div className="resume-col">
                            <div className="resume-group">
                                <h3>EDUCATION</h3>
                                <div className="resume-item">
                                    <span className="year">2025 - Present</span>
                                    <div className="details">
                                        <strong>Informatics & Product Design</strong>
                                        <span>Chosun University, Korea</span>
                                    </div>
                                </div>

                            </div>

                            <div className="resume-group">
                                <h3>CONTACT</h3>
                                <ul className="resume-list">
                                    <li>Phone: 010-6601-8132</li>
                                    <li>Email: yhr060816@naver.com</li>
                                </ul>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="resume-col">
                            <div className="resume-group">
                                <h3>EXPERIENCE</h3>
                                <div className="resume-item">
                                    <strong>Student Studying Design</strong>
                                    <span>2025 - Present</span>
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
