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
`;

const Img = styled.img`
  width: 15px;
  height: 15px;
  margin: 15px;
  cursor: pointer;
  &:hover{
    height: 20px;
    width: 20px;
    margin: 13px;
  }
`

const Button = styled.button`
  color: #FFE0B2;
  text-decoration: none;
  font-size: 1.4rem;
  margin-right: 5%;
  background-color: #383633;
  border: none;
  &:hover{
    cursor: pointer;
    font-weight: bold;
    font-size: 1.5rem;
  }
`

const NavItem = styled(NavLink)`
  color: white;
  textDecoration: none;
`

const ProductHeader = () => {
  return (
    <Nav>
      <div>
        <NavItem to="/">
          <Img src={closebutton} alt="close this screen" />
        </NavItem>
      </div>
      <Button type="submit" >SAVE</Button>
    </Nav>
  )
}

export default ProductHeader;

