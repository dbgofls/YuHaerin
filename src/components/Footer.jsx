import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="container">
                <div className="footer__card">
                    <div className="footer__left">
                        <div className="subscribe-badge">Contact</div>
                        <h2 className="footer__title">Contact</h2>

                        <div className="footer__contact-info">
                            <p>Feel free to reach out for collaborations.</p>
                            <a href="mailto:yhr060816@naver.com" className="footer__email-link">
                                yhr060816@naver.com
                            </a>
                        </div>
                    </div>

                    <div className="footer__right">
                        <nav className="footer__nav">
                            <a href="#about">About</a>
                            <a href="#myworks">My Works</a>
                            <a href="#resources">Resources</a>
                            <a href="#academy">Academy</a>
                            <a href="#contact">Contact</a>
                        </nav>

                        <div className="footer__socials">
                            {/* Social icons placeholders */}
                            <div className="social-icon">f</div>
                            <div className="social-icon">t</div>
                        </div>
                    </div>
                </div>
                <p className="copyright">&copy; {new Date().getFullYear()} My Portfolio. Privacy policy</p>
            </div>
        </footer>
    );
};

export default Footer;
