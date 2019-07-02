import React from 'react';
import styled from 'styled-components';


const Nav = styled.nav`
    display: flex;
    width: 100%;
    margin-top: 1rem;
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
      <span style={{ fontSize: '25px', cursor: 'pointer' }}>
        <NavLink to="/" style={{ color: 'white', textDecoration: 'none' }}>
        X

        </NavLink>

      </span>
      <form>
        <label htmlFor="Project" style={{ fontSize: '12px' }}>
PROJECT NAME
          {' '}
          <br />
          <input
            type="text"
            id="Project"
            style={{
              outline: 'none',
              border: 'none',
              marginTop: '10px',
              borderBottom: '1px solid white',
              backgroundColor: '#383633',
              color: 'white',
              fontSize: '16px',
            }}
          />
        </label>
      </form>
    </div>
    <NavLink to="/" style={{ color: '#FFE0B2', textDecoration: 'none' }}><h2 style={{ fontSize: '16px', marginTop: '1.5rem' }}>SAVE</h2></NavLink>
  </Nav>
);

export default ProductHeader;
