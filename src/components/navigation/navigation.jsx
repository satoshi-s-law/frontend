/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
    display: flex;
    align-items: center;
    padding: 0px 3%;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 2rem; 

    /* position: fixed;
    z-index: 2; */
    background-color: #121212;
    width: 100%;
    height: 70px;
    span {
        margin: '0 1rem';
        color: #ebbc77; 
        text-align: center;
    }
`;

const Navigation = () => (
  <Nav>
    <span> SATOSHI'S LAW</span>
  </Nav>
);

export default Navigation;
