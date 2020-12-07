import React from 'react';
// import main from '../img/main.jpg';
import main01 from '../img/main01.jpg';
import styled from 'styled-components';

const AboutSection = () => {
    return (
        <StyledAbout>
            <StyledDescription>
                <div className="title">
                    <StyledHide>
                        <h2>My work is to make</h2>
                    </StyledHide>
                    <StyledHide>
                        <h2>your <span>UI</span> look</h2>
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
                <img src={main01} alt="main.jpg" />
            </StyledImage>
        </StyledAbout>
    )
}

const StyledAbout = styled.div`
    min-height: 90vh;
    color:white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5rem 8rem;
`

const StyledDescription = styled.div`
    flex: 1;
    padding-right: 3rem;
    h2{
        font-weight: lighter;
    }
`
const StyledImage = styled.div`
    /* flex: 1; */
    overflow: hidden;
    img{
        border-radius: 10px;
    }
`

const StyledHide = styled.div`
    overflow: hidden;
` 

export default AboutSection;