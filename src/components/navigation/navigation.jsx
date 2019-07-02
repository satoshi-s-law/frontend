/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
    display: flex;
    align-items: center;
    background-color: #212121;
    width: 100%;
    height: 70px;
    span {
        color: #ebbc77;
        font-family: 'Montserrat', sans-serif;
        font-size: 2.3rem;
        font-weight: 900;
        text-align: center;
        width: 100%;
    }
`;

const Navigation = () => (
  <Nav>
    <span>SATOSHI'S LAW</span>
  </Nav>
);

export default Navigation;
