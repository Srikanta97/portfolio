import styled from 'styled-components';

export const StyledAbout = styled.div`
    min-height: 90vh;
    color:white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3rem 6rem;
`;
export const StyledDescription = styled.div`
    flex: 1;
    padding-right: 3rem;
    h2{
        font-weight: lighter;
    }
`;
export const StyledImage = styled.div`
    /* flex: 1; */
    overflow: hidden;
    img{
        border-radius: 3px;
    }
`;
export const StyledHide = styled.div`
    overflow: hidden;
`;