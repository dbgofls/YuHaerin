import profileImg from '../assets/profile.jpg';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="window-frame">
                <div className="window-header">
                    <div className="win-btn">_</div>
                    <div className="win-btn">□</div>
                    <div className="win-btn">x</div>
                </div>

                <div className="window-content">
                    <div className="about__grid">
                        {/* Left Column: Avatar & Character */}
                        <div className="about__profile">
                            <div className="profile-avatar">
                                {/* Use imported profile image */}
                                <img src={profileImg} alt="Avatar" />
                            </div>
                            <h3>LVL 26</h3>
                            <button>STATUS</button>
                        </div>

                        {/* Right Column: Info */}
                        <div className="about__info">
                            <h2 className="section-title">About Me</h2>
                            <p>
                                My name is Yu Haerin.
                                I'm a Graphic Designer & Logo Creator.
                                Passionate about all things graphic design with
                                a great sense of curiosity.
                            </p>

                            <div className="info-group">
                                <h3>Contact Me</h3>
                                <ul className="info-list">
                                    <li>Phone: 010-1234-5678</li>
                                    <li>Email: example@email.com</li>
                                </ul>
                            </div>

                            <div className="info-group">
                                <h3>Skills</h3>
                                <div className="skill-bar">
                                    <span className="skill-name">Graphic Design</span>
                                    <div className="progress-container"><div className="progress-fill" style={{ width: '90%' }}></div></div>
                                </div>
                                <div className="skill-bar">
                                    <span className="skill-name">Web Design</span>
                                    <div className="progress-container"><div className="progress-fill" style={{ width: '75%' }}></div></div>
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
