import React from 'react';
import efficient from '../img/efficient.svg';
import affordable from '../img/affordable.svg';
import prograde from '../img/pro-grade.svg';
import collab from '../img/collab.svg';
import main2 from '..//img/main2.jpg';

const ServicesSection = () => {
    return (
        <div className="services">
            <div className="description">
                <h2>High <span>quality</span> service!</h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={efficient} alt="efficient-icon" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={affordable} alt="affordable-icon" />
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, est.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={prograde} alt="pro_grade-icon" />
                            <h3>Pro Grade</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={collab} alt="collab-icon" />
                            <h3>Collab</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
            <div className="image">
                <img src={main2} />
            </div>
        </div>
    );
}

export default ServicesSection;