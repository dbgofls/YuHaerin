import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                {/* Lives / Health Bar */}
                <div className="header__lives">
                    <span className="heart-icon">♥</span>
                    <span className="heart-icon">♥</span>
                    <span className="heart-icon">♥</span>
                </div>

                <nav className="header__nav">
                    <a href="#about" className="header__link">PLAYER</a>
                    <a href="#myworks" className="header__link">MY WORKS</a>
                    <a href="#resources" className="header__link">ITEMS</a>
                </nav>

                {/* Coins / Score */}
                <div className="header__score">
                    <span className="coin-icon"></span>
                    <span>x 99</span>
                </div>
            </div>
        </header>
    );
};

export default Header;
