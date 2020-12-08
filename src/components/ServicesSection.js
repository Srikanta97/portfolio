import React from 'react';
import efficient from '../img/efficient.svg';
import affordable from '../img/affordable.svg';
import prograde from '../img/pro-grade.svg';
import collab from '../img/collab.svg';
import main2 from '..//img/main2.jpg';
import { StyledAbout, StyledDescription, StyledImage } from '../style.js';
import styled from 'styled-components';

const ServicesSection = () => {
    return (
        <StyledServices>
            <StyledDescription>
                <h2>High <span>quality</span> service!</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={efficient} alt="efficient-icon" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={affordable} alt="affordable-icon" />
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={prograde} alt="pro_grade-icon" />
                            <h3>Pro Grade</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={collab} alt="collab-icon" />
                            <h3>Collab</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                </Cards>
            </StyledDescription>
            <StyledImage>
                <img src={main2} />
            </StyledImage>
        </StyledServices>
    );
}

const StyledServices = styled(StyledAbout)`
    h2{
        padding: 0 3rem 5rem 0;
    }
    p{
        width: 70%;
        padding: 2rem 0 4rem 0;
    }
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Card = styled.div`
    flex-basis: 20rem;
    .icon{
        display: flex;
        align-items: center;
        h3{
            margin-left: 1rem;
            background-color: white;
            color: #1b1b1b;
            padding: 0.5rem 1rem;
        }
    }
`;

export default ServicesSection;