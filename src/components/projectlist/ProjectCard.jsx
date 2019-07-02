import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  background-color: rgb(56,54,51);
  font-size: 1.2rem;
  line-height: 2.0rem;
  padding: 50px 8% 15px 8%;
  
  @media(min-width: 1000px) {
    padding: 50px 25% 15px 25%;
  }
`;

const ProjectName = styled.h1`
  color: white;
  padding: 12px 0% 2px 0%;
  font-size: 1.5rem;
  font-weight: bold;
`;
const ClientName = styled.p`
  color: rgb(234,206,165);
  font-weight: lighter;
  padding: 2px 0%;
  font-size: 1.4rem;
`;
const PageDiv = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  font-family: 'Montserrat', sans-serif;
  height: 100vh;
  background-color: #000000;
`;

const DetailsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #000000;
  padding: 20px 8% 5px 8%;
  
  @media(min-width: 1000px) {
    padding: 20px 25% 5px 25%;
  }
`;

const Date = styled.h1`
  color: white;
  padding: 0px 0% 2px 0%;
  font-size: 1.2rem;
  font-weight: bold;
`;

const Duration = styled.p`
  color: white;
  padding: 0px 0% 2px 0%;
  font-size: 1.2rem;
  font-weight: lighter;
`;
const ViewMore = styled.p`
  padding: 0px 5px 2px 0%;
  font-size: 1.2rem;
  font-weight: lighter;
`;

const ViewMoreContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  color: #ebbc77;
  padding: 3px;
  &:hover{
    font-weight: bold;
    font-size: 1.5rem;
    cursor: pointer;
    box-shadow: 3px 3px #ebbc77;
    border: 1px solid #ebbc77;
    border-radius: 10px;
    margin-bottom: -3px;
    margin-left: -7px;
  }
`;

const AddTimeContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  color: #ebbc77;    
  background-color: #000000;
  padding: 20px 0% 19px 3%;
  margin: 0px 5% 0px 5%;
  &:hover{
    cursor: pointer;
    padding: 20px 0% 17px 3%;
    box-shadow: 3px 3px #ebbc77;
    margin: 0px 5% 0px 5%;
    border: 1px solid #ebbc77;
    border-radius: 10px;
  }
  @media(min-width: 1000px) {
    padding: 20px 20% 20px 20%;
    &:hover{
      padding: 20px 0% 18px 5%;
      box-shadow: 3px 3px #ebbc77;
      margin: 0px 20% 0px 20%;
      border: 1px solid #ebbc77;
      border-radius: 10px;
    }
  }
`;

const AddTimeText = styled.p`
  padding: 0px 0px 2px 5px;
  font-size: 1.2rem;
  font-weight: lighter;
`;

const Button = styled.button`
  color: #ebbc77;
  border: 1px solid #ebbc77;
  background: #000000;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.4rem;
  border-radius: 5px;
  padding: 5px 10px 5px 10px;
  &:hover{
    font-weight: bold;
    font-size: 1.5rem;
    cursor: pointer;
    padding: 4px 6px 5px 6px;
    box-shadow: 3px 3px #ebbc77;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  color: #ebbc77;    
  background-color: #000000;
  padding: 20px 8% 0px 8%;
  @media(min-width: 1000px) {
    padding: 20px 25% 0px 25%;
  }
`;

const I = styled.i`
  &:hover{
    cursor: pointer;
    color: #ebbc77;
  }
`

const ProjectCard = () => (
  <PageDiv>
    <Header>
      <I className="fas fa-chevron-left" />
      <ProjectName>Summer Hackathon</ProjectName>
      <ClientName>Lambda School</ClientName>
    </Header>
    <DetailsDiv>
      <Date>Project.date</Date>
      <Duration>Project.duration</Duration>
      <ViewMoreContainer>
        <ViewMore>VIEW MORE</ViewMore>
        <i className="fas fa-chevron-down" />
      </ViewMoreContainer>
    </DetailsDiv>
    <AddTimeContainer>
      <i className="fas fa-plus" />
      <AddTimeText>ADD TIME</AddTimeText>
    </AddTimeContainer>
    <ButtonDiv>
      <Button>CREATE INVOICE</Button>
    </ButtonDiv>
  </PageDiv>
);

export default ProjectCard;
