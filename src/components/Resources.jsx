import React from 'react';
import './Resources.css';

const Resources = () => {
    return (
        <section id="resources" className="resources">
            <div className="container">
                <h2 className="section-title resources__title">Resources & Skills</h2>
                <div className="resources__grid">
                    <div className="resource-card">
                        <h3>Design Tools</h3>
                        <ul>
                            <li>Figma</li>
                            <li>Adobe Photoshop</li>
                            <li>Blender</li>
                            <li>Illustrator</li>
                        </ul>
                    </div>
                    <div className="resource-card">
                        <h3>Development</h3>
                        <ul>
                            <li>HTML/CSS</li>
                            <li>React</li>
                            <li>Vite</li>
                            <li>JavaScript</li>
                        </ul>
                    </div>
                    <div className="resource-card">
                        <h3>Downloads</h3>
                        <p>Download my resume or portfolio PDF.</p>
                        <button className="btn-download">Download CV</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resources;
