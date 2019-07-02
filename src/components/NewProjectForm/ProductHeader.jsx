import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import closebutton from './closebutton.png';

const Nav = styled.nav`
    display: flex;
    width: 100%;
    background-color: #383633;
    flex-wrap: wrap;
    justify-content: space-between;
    div {
        display: flex;
        padding: 1rem;
        color: white;
        flex-direction: column;
        justify-content: center;
        form {
            margin-top: 1rem;
        }
    }
    h2 {
        margin: 1rem;
        color: #FFE0B2
    }
`;

const ProductHeader = () => (
  <Nav>
    <div>

      <NavLink to="/" style={{ color: 'white', textDecoration: 'none' }}>
        <img
          src={closebutton}
          alt="close this screen"
          style={{
            width: '25px', height: '25px', margin: '25px', cursor: 'pointer',
          }}
        />
      </NavLink>

    </div>
    <button type="submit" style={{ color: '#FFE0B2', textDecoration: 'none' }}><h2 style={{ fontSize: '16px', marginTop: '1.5rem' }}>SAVE</h2></button>
  </Nav>
);

export default ProductHeader;
