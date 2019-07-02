import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import closebutton from "./closebutton.png"
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

const greySky = '#979797'
const ProductHeader = () => (
  <Nav>
    <div>
        
      <NavLink to="/" style={{ color: 'white', textDecoration: 'none' }}>
      <img src={closebutton} style={{width: '25px', height: '25px', margin: '25px',cursor: 'pointer'}}/>
     

    </NavLink>

       <form>
        <label htmlFor="Project" style={{ fontSize: '12px',marginLeft: '1em'} }>
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
              borderBottom: '1px solid ' + greySky,
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
