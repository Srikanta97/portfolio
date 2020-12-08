import React from 'react';
import styled from 'styled-components';
import { Link, linked } from 'react-router-dom';
import music from '../img/music.png';
import jobPortal from '../img/jobPortal.png';
import portfolio from '../img/portfolio.png';

const MyWork = () => {
    return (
        <Work>
            <Project>
                <h2>Job Portal</h2>
                <div className="line"></div>
                <Link>
                    <img src={jobPortal} alt="Home Page" />
                </Link>
            </Project>
            <Project>
                <h2>Music Player</h2>
                <div className="line"></div>
                <Link>
                    <img src={music} alt="Home Page" />
                </Link>
            </Project>
            <Project>
                <h2>My Portfolio</h2>
                <div className="line"></div>
                <Link>
                    <img src={portfolio} alt="Home Page" />
                </Link>
            </Project>
        </Work>
    );
}

const Work = styled.div`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 5rem;
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
        padding-left: 5rem;
    }
`

export default MyWork;