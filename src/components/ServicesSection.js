import React from 'react';
import efficient from '../img/efficient.svg';
import affordable from '../img/affordable.svg';
import prograde from '../img/pro-grade.svg';
import collab from '../img/collab.svg';
import servicesSection from '..//img/servicesSection.jpeg';
import { StyledAbout, StyledDescription, StyledImage } from '../style.js';
import styled from 'styled-components';

const ServicesSection = () => {
    return (
        <StyledServices>
            <StyledDesc>
                <h2><span>Flagship</span> webapps!</h2>
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
            </StyledDesc>
            <StyledImage>
                <img style={{paddingLeft:"3rem",paddingRight:"1rem"}} src={servicesSection} />
            </StyledImage>
        </StyledServices>
    );
}

const StyledServices = styled(StyledAbout)`
    padding: 3rem 3rem;
    flex-direction: row-reverse;
    align-items: flex-start;
    h2{
        padding: 0 3rem 5rem 0;
    }
    p{
        width: 70%;
        padding: 2rem 0 4rem 0;
    }
`;

const StyledDesc = styled(StyledDescription)`
    padding-left: 12rem;
    padding-right: 0rem;
`

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Card = styled.div`
    flex-basis: 17rem;
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