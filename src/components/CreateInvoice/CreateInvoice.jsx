import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
    background-color: #212121;
    color: white;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 30px 8% 30px 8%;
    @media(min-width: 1000px) {
        padding: 30px 25% 30px 25%;
    }
`
const Icon = styled.i`
    font-size: 1.6rem;
    width: 1%;
    text-align: right;
    &:hover{
        cursor: pointer;
        color: #ebbc77;
    }
`
const H1 = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-size: 1.8rem;
    width: 99%;
    text-align: center;
    &:hover{
        font-weight: bold;
        cursor: pointer;
    }
`

const InvoiceHeader = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-size: 1.8rem;
    width: 99%;
    text-align: center;
`

const ContactOptionBar = styled.div`
    background-color: rgb(56,54,51);
    color: white;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 10px 8%;
    @media(min-width: 1000px) {
        padding: 10px 20% 10px 20%;
    }
`
const Button = styled.button`
    color: #ebbc77;
    border: 1px solid #ebbc77;
    background-color: #000000;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
    border-radius: 5px;
    padding: 5px 10px 5px 10px;
    margin-left: 5%;
    &:hover{
        font-weight: bold;
        cursor: pointer;
        padding: 4px 6px 5px 6px;
        box-shadow: 3px 3px #ebbc77;
    }
`

const BlankDiv = styled.div`
    border-bottom: 1px solid #ebbc77;
    width: 65%;
    margin: 0px 5%;
    vertical-align: bottom;
    padding-top: 30px;
`

const SendDiv = styled.div`
    background-color: #000000;
    color: white;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 30px 3% 30px 3%;
    border-bottom: 1px solid rgb(174,174,174,0.3);
    @media(min-width: 1000px) {
        padding: 30px 20% 30px 20%;
    }
`

const ProjectDiv = styled.div`
    background-color: #000000;
    padding: 0px 8%;
    height: 100vh;    
    @media(min-width: 1000px) {
        padding: 0px 20% 0px 20%;
    }
`

const TaskDetailDiv = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #000000;
    padding: 20px 0% 5px 0%;
`

const Date = styled.h1`
    color: white;
    padding: 0px 0% 2px 0%;
    font-size: 1.3rem;
    font-weight: bold;
`

const Duration = styled.p`
    color: white;
    font-size: 1.3rem;
    font-weight: lighter;
    line-height: 2.0rem;
    padding-bottom: 2px;
    text-align: right;
`

const ProjectName = styled.h1`
    color: white;
    padding: 12px 0% 12px 0%;
    font-size: 1.6rem;
    font-weight: bold;
`
const ClientName = styled.p`
    color: rgb(234,206,165);
    font-weight: lighter;
    padding: 2px 0%;
    font-size: 1.5rem;
`

const Task = styled.h1`
    color: white;
    font-size: 1.3rem;
    line-height: 2.0rem;
    padding-bottom: 2px;
`

const TaskTotal = styled.div`
    border-top: 1px solid rgb(174,174,174, 0.3);
    border-bottom: 1px solid rgb(174,174,174,0.3);
    color: white;
    padding: 10px 0%;
    display: flex;
    justify-content: space-between;
`


const PageDiv = styled.div`
    font-family: 'Montserrat', sans-serif;
`

const CreateInvoice = () => {
    return(
        <PageDiv>
            <Header>
                <Icon className="fas fa-chevron-left"></Icon>
                <InvoiceHeader>CREATE INVOICE</InvoiceHeader>
            </Header>
            <ContactOptionBar>
                <H1>PHONE</H1>
                <H1>EMAIL</H1>
            </ContactOptionBar>
            <SendDiv>
                <BlankDiv></BlankDiv>
                <Button>SEND</Button>
            </SendDiv>
            <ProjectDiv>
                <ProjectName>Summer Hackathon</ProjectName>
                <ClientName>Lambda School</ClientName>
                <TaskDetailDiv>
                    <Date>7/1/19</Date>
                    <div>
                        <Task>Planning</Task>
                        <Task>Coding</Task>
                        <Task>Research</Task>
                        <Task>Prototyping</Task>
                        <Task>Polish Code</Task>
                    </div>
                    <div>
                        <Duration>3 hours</Duration>
                        <Duration>12 hours</Duration>
                        <Duration>5 hours</Duration>
                        <Duration>2 hours</Duration>
                        <Duration>2 hours</Duration>
                    </div>
                </TaskDetailDiv>
                <TaskTotal>
                    <Date>TOTAL</Date>
                    <Date>24 hours</Date>
                </TaskTotal>
            </ProjectDiv>

        </PageDiv>
    )
}

export default CreateInvoice;