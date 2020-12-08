import React from 'react';
import main01 from '../img/main01.jpg';
import { StyledAbout, StyledDescription, StyledHide, StyledImage } from '../style.js';
//Framer motion
import { motion } from 'framer-motion';
import { titleAnimation, fade, photoAnimation } from '../animate';

const AboutSection = () => {
    return (
        <StyledAbout>
            <StyledDescription>
                <motion.div>
                    <StyledHide>
                        <motion.h2 variants={titleAnimation} initial="hidden">
                            I work to make
                        </motion.h2>
                    </StyledHide>
                    <StyledHide>
                        <motion.h2 variants={titleAnimation}>
                            your <span>UI</span> look visually
                        </motion.h2>
                    </StyledHide>
                    <StyledHide>
                        <motion.h2 variants={titleAnimation}>
                            stunning!
                        </motion.h2>
                    </StyledHide>
                </motion.div>
                <motion.p variants={fade}>
                    Looking for an awesome front end developer?
                    <br/>Contact me for collaboration.
                </motion.p>
                <motion.button variants={fade}>
                    Contact me
                </motion.button>
            </StyledDescription>
            <StyledImage>
                <motion.img variants={photoAnimation} src={main01} alt="main01.jpg" />
            </StyledImage>
        </StyledAbout>
    )
}

export default AboutSection;