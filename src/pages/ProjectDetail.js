import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { ProjectState } from '../projectState';
// Animation
import { motion } from 'framer-motion';
import { pageAnimation } from '../animate';

const ProjectDetail = () => {
    const history = useHistory();
    const url = history.location.pathname;
    const [projects, setProjects] = useState(ProjectState);
    const [project, setProject] = useState(null);

    useEffect(() => {
        const currentProject = projects.filter((stateProject) => stateProject.url === url);
        setProject(currentProject[0]);
    },[projects, url])

    return (
        <>
            {project && (
                <Details
                    variants={pageAnimation}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                >
                    <Headline>
                        <h2>{project.title}</h2>
                        <img src={project.mainImg} alt="main" />
                    </Headline>
                    <Features>
                        {project.features.map((feature) => {
                            return (
                                <Feature
                                    title={feature.title}
                                    description={feature.description}
                                    key={feature.title}
                                />
                            )
                        })}
                    </Features>
                    <ImageDisplay>
                        <img src={project.secondaryImg} alt="Another image from the project" />
                    </ImageDisplay>
                </Details>
            )}
        </>
    )
}

const Details = styled(motion.div)`
    color: white;
`
const Headline = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h2{
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%,-10%);
        padding-bottom: 15rem;
    }
    img{
        padding: 0 9rem;
    }
`
const Features = styled.div`
    min-height: 80vh;
    display: flex;
    margin: 3rem 5rem;
    align-items: center;
    justify-content: space-around;
`

const FeatureStyled = styled.div`
    padding: 2rem;
    h3{
        font-size: 1.5rem;
        text-align: center;
    }
    .line{
        width: 100%;
        background: #23d997;
        height: 0.3rem;
        margin: 1rem 0rem 0 0;
    }
    p{
        padding: 2rem 0;
    }
`
const ImageDisplay = styled.div`
    min-height: 50vh;
    img{
        padding: 0 20rem 10rem 20rem;
    }
`

// Feature component
const Feature = ({title,description}) => {
    return (
        <FeatureStyled>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </FeatureStyled>
    )
}

export default ProjectDetail;