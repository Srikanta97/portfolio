import React from 'react';
import main01 from '../img/main01.jpg';
import { StyledAbout, StyledDescription, StyledHide, StyledImage } from '../style.js';
//Framer motion
import {motion} from 'framer-motion';

const AboutSection = () => {
    return (
        <StyledAbout>
            <StyledDescription>
                <motion.div>
                    <StyledHide>
                        <motion.h2>
                            I work to make
                        </motion.h2>
                    </StyledHide>
                    <StyledHide>
                        <motion.h2>
                            your <span>UI</span> look visually
                        </motion.h2>
                    </StyledHide>
                    <StyledHide>
                        <motion.h2>
                            stunning!
                        </motion.h2>
                    </StyledHide>
                </motion.div>
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