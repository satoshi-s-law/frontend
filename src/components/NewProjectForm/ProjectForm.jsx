import React from 'react';
import styled from 'styled-components';
import ProductHeader from './ProductHeader';

const Div = styled.div`
    display: flex;
    height: 100vh;
    background-color: #000000;
    width: 100%;
    font-family: 'Montserrat', sans-serif;

    @media(min-width: 1000px) {
      padding: 0px 25% 0px 25%;
      width: auto;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const Label = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px 0px 10px 20px;
    color: white;
    font-size: 1.2rem;
    border-bottom: 1px solid #979797;
    max-width: 100%;
`;
const ProjectInput = styled.input`
  outline: none;
  border: none;
  padding: 0px 0px 15px 20px;
  border-bottom: 1px solid #979797;
  background-color: #383633;
  color: white;
  font-size: 16px;
  font-weight: bold;
`

const ProjectLabel = styled.label`
  font-size: 12px;
  padding: 0px 0px 15px 20px;
  background: #383633;
  color: #ffffff;
`
const Input = styled.input`
    border: none;
    outline: none;
    background-color: #000000;
    color: white;
    border-left: ${props => (props.primary ? '1px solid '+ greySky : 'none')};
    font-family: 'Montserrat';
    padding-top: 10px;
`;
const greySky = '#979797'

class ProjectForm extends React.Component {
  state = {
    projectName: null,//string 
    clientName:null, //string 
    duration: null, //string hour 8
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name] : e.target.value }) 
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    this.props.addProjectToState(this.state)
    this.props.history.push("/")
  }
  render() {
    return (
    <Div>
      <Form id="projectform" onSubmit={this.handleSubmit}>
        <ProductHeader {...this.props}/>
        <ProjectLabel htmlFor="Project">
          PROJECT NAME
          {' '}
        </ProjectLabel>
        <ProjectInput type="text" id="Project" name="projectName" onChange={this.handleChange} />
        <Label>
          CLIENT NAME 
          {' '}
          <Input type="text" name="clientName" onChange={this.handleChange}/>
        </Label>
        <Label>
          DURATION
          {' '}
          <Input type="text" name="duration" onChange={this.handleChange}/>
        </Label>
      </Form>
    </Div>
  )}
}
export default ProjectForm;

        {/* Getting Rid Of Start And End Time with duration only */}
          {/* <div style={{ width: '50%' }}>
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
          </div> */}