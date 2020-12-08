import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <StyledNav>
            <h1><Link to="/">Portfolio</Link></h1>
            <ul>
                <li>
                    <Link to="/">1.About</Link>
                </li>
                <li>
                    <Link to="/work">2.My Work</Link>
                </li>
                <li>
                    <Link to="/contact">3.Contact</Link>
                </li>
            </ul>
        </StyledNav>
    );
}

const StyledNav = styled.nav`
background-color: #282828;
    h1{
        font-family: 'Lobster', cursive;
        font-size: 1.7rem;
        font-weight: lighter;
    }
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    padding: 1rem 6rem;
    ul{
        display: flex;
        list-style: none;
    }
    li{
        position: relative;
        padding-left: 8rem;
        margin: auto;
    }
    a{
        color: white;
        text-decoration: none;
    }
`

export default Nav;