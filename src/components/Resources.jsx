import React from 'react';
import './Resources.css';

const items = [
    { id: 1, name: 'PHOTOSHOP', price: 'LV. 99', icon: '🎨', description: 'Image editing mastery' },
    { id: 2, name: 'ILLUSTRATOR', price: 'LV. 90', icon: '✒️', description: 'Vector art expertise' },
    { id: 3, name: 'FIGMA', price: 'LV. 85', icon: '🛠️', description: 'UI/UX design proficiency' },
    { id: 4, name: 'BLENDER', price: 'LV. 70', icon: '🧊', description: '3D modeling basics' }
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
                                <p>STATUS: ONLINE</p>
                                <p>READY TO LEVEL UP!</p>
                            </div>
                        </div>
                        <h2 className="section-title">SKILLS</h2>
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
