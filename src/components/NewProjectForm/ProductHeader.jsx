import React from 'react';
import styled from 'styled-components';
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
const ProductHeader = () => (
  <Nav>
    <div>
      <img src={closebutton} style={{width: '25px', height: '25px', margin: '25px'}}/>
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
    <h2 style={{ fontSize: '2.0rem', margin: '40px' }}>SAVE</h2>
  </Nav>
);

export default ProductHeader;
