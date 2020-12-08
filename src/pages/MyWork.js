import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import music from '../img/music.png';
import jobPortal from '../img/jobPortal.png';
import portfolio from '../img/portfolio.png';
// Animation
import { motion } from 'framer-motion';
import { pageAnimation } from '../animate';

const MyWork = () => {
    return (
        <Work
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
            style={{ backgroundColor: "#ececec"}}
        >
            <Project>
                <h2>Job Portal</h2>
                <div className="line"></div>
                <Link to="/work/job-portal" exact>
                    <img src={jobPortal} alt="Home Page" />
                </Link>
            </Project>
            <Project>
                <h2>Music Player</h2>
                <div className="line"></div>
                <Link to="/work/music-player" exact>
                    <img src={music} alt="Home Page" />
                </Link>
            </Project>
            <Project>
                <h2>My Portfolio</h2>
                <div className="line"></div>
                <Link to="/work/portfolio" exact>
                    <img src={portfolio} alt="Home Page" />
                </Link>
            </Project>
        </Work>
    );
}

const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 3rem 5rem;
`

const Project = styled.div`
    padding-bottom: 10rem;
    h2{
        padding: 0.5rem 0rem;
    }
    .line{
        height: 0.5rem;
        background: #cccccc;
        margin-bottom: 3rem;
    }
    img{
        padding: 0rem 4rem;
    }
`

export default MyWork;