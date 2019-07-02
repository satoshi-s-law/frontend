import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
    background-color: rgb(56,54,51);
    font-size: 1.2rem;
    line-height: 2.0rem;
    padding: 50px 2% 15px 2%;
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
`;

const DetailsDiv = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #000000;
    padding: 20px 8% 0px 8%;
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
`;

const AddTimeContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    color: #ebbc77;    
    background-color: #000000;
    padding: 20px 8% 0px 8%;
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
`;

const ButtonDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    color: #ebbc77;    
    background-color: #000000;
    padding: 20px 8% 0px 8%;
`;

const ProjectCard = () => (
  <PageDiv>
    <Header>
      <i className="fas fa-chevron-left" />
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
