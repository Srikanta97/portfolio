import React from 'react';
import main from '../img/main.jpg';

const AboutSection = () => {
    return (
        <div>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>I work to make</h2>
                    </div>
                    <div className="hide">
                        <h2>your <span>UI</span></h2>
                    </div>
                    <div className="hide">
                        <h2>beautiful!</h2>
                    </div>
                </div>
                <p>
                    Working on a full stack project and need an awesome front end developer? Contact me for collaboration.
                </p>
                <button>Contact</button>
            </div>
            <div className="img">
                <img src={main} alt="main.jpg" />
            </div>
        </div>
    )
}

export default AboutSection;