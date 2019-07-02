import React from 'react';
import styled from 'styled-components';
import ProductHeader from './ProductHeader';

const Div = styled.div`
    display: flex;
    background-color: #212121;
    width: 100%;
    form {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
`;

const Label = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    color: white;
    font-size: 12px;
    font-family: 'Montserrat';
    margin-left: 1em;
`;

const Input = styled.input`
    border: none;
    outline: none;
    background-color: #212121;
    color: white;
    border-left: ${props => (props.primary ? '1px solid '+ greySky : 'none')};
    font-family: 'Montserrat';
`;
const greySky = '#979797'

class ProjectForm extends React.Component {
  
  state = {
    projectName: null,//string 
    clientName:null, //string 
    timeStart: null, //string 2pm
    timeEnd: null //string 1am
  }

handleChange = (e) => {
  e.preventDefault();
  this.setState({
    [e.target.name] : e.target.value
  } 
  )
}

handleSubmit = (e) =>{
e.preventDefault()
this.props.addProjectToState(this.state)
this.props.history.push("/")
}
 render() {
  return (
  <Div>

    <form id="projectform" onSubmit={this.handleSubmit}>
    <ProductHeader {...this.props}/>
    <label htmlFor="Project" style={{ fontSize: '12px',paddingLeft: '1.6em', paddingBottom: '10px', background: '#383633', color: "#fff"} }>
PROJECT NAME
          {' '}
          <br />
          </label>
          <input
            type="text"
            id="Project"
            style={{
              outline: 'none',
              border: 'none',
              paddingRight: '1.6em',
              borderBottom: '1px solid ' + greySky,
              backgroundColor: '#383633',
              color: 'white',
              fontSize: '16px',
            }}
            name="projectName" 
            onChange={this.handleChange}
          />
       
      <Label >
CLIENT NAME
        {' '}
        <br />
        <Input type="text" name="clientName" onChange={this.handleChange}/>
      </Label>
      <div style={{
        display: 'flex',
        borderTop: '1px solid '+greySky,
        width: '100%',

      }}
      >

        <div style={{ width: '50%' }}>
          <Label>
              START TIME
            {' '}
            <br />
            <Input type="text" name="timeStart" onChange={this.handleChange} placeholder="8am"/>
          </Label>
        </div>
        <div style={{ borderLeft: '1px solid '+greySky }}>
          <Label>
            END TIME
            {' '}
            <br />
            <Input type="text" name="timeEnd" onChange={this.handleChange} placeholder="5pm"/>
          </Label>
        </div>
      </div>
    </form>
  </Div>
)}
}
export default ProjectForm;
