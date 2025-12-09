import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container header__container">
                <div className="header__logo">Akademia</div>
                <nav className="header__nav">
                    <a href="#about" className="header__link">About</a>
                    <a href="#myworks" className="header__link">My Works</a>
                    <a href="#resources" className="header__link">Resources</a>
                </nav>
                <a href="#contact" className="header__cta">Contact</a>
            </div>
        </header>
    );
};

export default Header;
