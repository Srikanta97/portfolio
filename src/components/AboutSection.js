import React from 'react';
import main01 from '../img/main01.jpg';
import { StyledAbout, StyledDescription, StyledHide, StyledImage } from '../style.js';

const AboutSection = () => {
    return (
        <StyledAbout>
            <StyledDescription>
                <div className="title">
                    <StyledHide>
                        <h2>I work to make</h2>
                    </StyledHide>
                    <StyledHide>
                        <h2>your <span>UI</span> look visually</h2>
                    </StyledHide>
                    <StyledHide>
                        <h2>stunning!</h2>
                    </StyledHide>
                </div>
                <p>
                    Looking for an awesome front end developer?
                    <br/>Contact me for collaboration.
                </p>
                <button>Contact me</button>
            </StyledDescription>
            <StyledImage>
                <img src={main01} alt="main01.jpg" />
            </StyledImage>
        </StyledAbout>
    )
}

export default AboutSection;