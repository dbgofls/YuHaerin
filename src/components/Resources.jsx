import React from 'react';
import './Resources.css';

const items = [
    { id: 1, name: 'RESUME.PDF', price: 'FREE', icon: '📄', description: 'Detailed stats & skills' },
    { id: 2, name: 'PORTFOLIO.PDF', price: 'FREE', icon: '📘', description: 'Offline version' },
    { id: 3, name: 'BUSINESS CARD', price: '50 G', icon: '💳', description: 'Contact info +1' },
    { id: 4, name: 'DESIGN ASSETS', price: '100 G', icon: '💎', description: 'Rare PNGs' }
];

const Resources = () => {
    return (
        <section id="resources" className="resources">
            <div className="container">
                <div className="shop-interface">
                    <div className="shop-header">
                        <div className="shopkeeper">
                            {/* Simple CSS/Emoji Shopkeeper */}
                            <span className="keeper-sprite">🧙‍♂️</span>
                            <div className="speech-bubble">
                                <p>WELCOME, TRAVELER!</p>
                                <p>TAKE A LOOK AT MY WARES.</p>
                            </div>
                        </div>
                        <h2 className="section-title">ITEM SHOP</h2>
                    </div>

                    <div className="items-grid">
                        {items.map((item) => (
                            <div key={item.id} className="item-card">
                                <div className="item-icon">{item.icon}</div>
                                <div className="item-details">
                                    <h3 className="item-name">{item.name}</h3>
                                    <p className="item-desc">{item.description}</p>
                                    <div className="item-buy">
                                        <span className="price">{item.price}</span>
                                        <button className="buy-btn">BUY</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="shop-footer">
                        <p>YOUR GOLD: 9999 G</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resources;
