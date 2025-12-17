import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="footer__container">
                <h2 className="footer__title">GAME OVER</h2>
                <span className="coin-insert">INSERT COIN TO CONTINUE</span>

                <div className="footer__grid">
                    {/* Column 1 */}
                    <div className="footer__section">
                        <h3>CREDITS</h3>
                        <ul className="footer__links">
                            <li><a href="#">DESIGN BY HAERIN</a></li>
                            <li><a href="#">CODE BY AI</a></li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div className="footer__section">
                        <h3>CONNECT</h3>
                        <ul className="footer__links">
                            <li><a href="https://www.youtube.com/@%EC%A7%91%EC%88%9C%EC%9D%B4%EA%B3%B5%EC%A3%BC" target="_blank" rel="noopener noreferrer">YOUTUBE</a></li>
                            <li><a href="https://www.instagram.com/licid._.0816/" target="_blank" rel="noopener noreferrer">INSTAGRAM</a></li>
                            <li><a href="#">GITHUB</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p>All rights reserved Rayo© 2025</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
