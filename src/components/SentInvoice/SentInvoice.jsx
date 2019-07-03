import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import BGimg from './senInvoice.png';
import Navigation from '../Navigation/Navigation';

const H1 = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-size: 1.7rem;
    text-align: left;
    color: white;
    background-color: #000000;
    padding: 20px 20px;

    @media(min-width: 1000px) {
        text-align: center;
        padding-top: 30px;
    }
`

const Button = styled.button`
    color: #ebbc77;
    border: 1px solid #ebbc77;
    background-color: #000000;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
    border-radius: 5px;
    padding: 10px 30px 10px 30px;
    margin-top: 30px;
    &:hover{
        font-weight: bold;
        cursor: pointer;
        padding: 10px 30px 10px 30px;
        box-shadow: 3px 3px #ebbc77;
    }
`;
const SendDiv = styled.div`
    background-color: #000000;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 30px 3% 30px 3%;
    @media(min-width: 1000px) {
        padding: 30px 20% 30px 20%;
    }
`;

const PageDiv = styled.div`
    font-family: 'Montserrat', sans-serif;
    height: 100vh;
    background-color: #000000;
`;


const SentInvoice = () => (
  <PageDiv>
    <Navigation />
    <H1>Your invoice has been sent!</H1>
    <SendDiv>
      <img src={BGimg} height="200px" alt="Bitcoin_Sent" />
      <NavLink to="/" activeStyle={{ color: '#ebbc77' }}>
        <Button>DASHBOARD</Button>
        {' '}
      </NavLink>
    </SendDiv>
  </PageDiv>
);

export default SentInvoice;
