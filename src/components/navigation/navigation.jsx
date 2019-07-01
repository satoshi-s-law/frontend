import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
    display: flex;
    align-items: center;

    /* position: fixed;
    z-index: 2; */
    background-color: #121212;
    width: 100%;
    height: 70px;
    span {
        margin: 0 1rem;
        color: #ff9800;
        text-align: center;
    }
`;

const Navigation = () => (
  <Nav>
    <span> SATOSHI'S LAW</span>
  </Nav>
);

export default Navigation;
