import React from 'react';
import styled from 'styled-components';
import { StyledAbout } from '../style';

const FaqSection = () => {
    return (
        <Faq>
            <h2><span>FAQ</span></h2>
            <div className='question'>
                <h4>• How to get started?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, commodi!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className='question'>
                <h4>• Am I available full time?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, commodi!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className='question'>
                <h4>• What payment methods do I accept?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, commodi!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className='question'>
                <h4>• What services do I offer?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, commodi!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="faq-line"></div>
            </div>
        </Faq>
    )
}

const Faq = styled(StyledAbout)`
    display: block;
    span{
        display: block;
    }
    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line{
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question{
        padding: 2rem 0;
        cursor: pointer;
    }
    .answer{
        padding: 1.5rem 0;
        p{
            padding: 1rem 0;
        }
    }

`

export default FaqSection;