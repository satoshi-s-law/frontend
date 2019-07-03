/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ProductHeader from './ProductHeader';
import addTasks from "./addtasks.png"
import { thisExpression } from '@babel/types';
const greySky = '#979797'
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

const greySky = '#979797';


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
    border-left: ${props => (props.primary ? `1px solid ${greySky}` : 'none')};
    font-family: 'Montserrat';
    padding-top: 10px;
`;

const TasksForm = styled.form`
background: #212121;
display: flex;
   justify-content: left;
   padding: 1em 0;
   flex-direction: column;
  
 button{
   background: #212121;
   color:${greySky};
   border: none;
   width: 50%;

 }
 input{
  border-bottom: 1px solid ${greySky}
  width: 100%;
 }

`



class ProjectForm extends React.Component {
  state = {
    projectName: null,//string 
    clientName:null, //string 
    duration: null, //string hour 8
    tasks : [],// array of strings
    task: null
  }
handleChange = (e) => {
  e.preventDefault();
  this.setState({
    [e.target.name] : e.target.value
  } 
  )
}
handleTasksChange = (e) =>{
  
e.preventDefault()
this.setState({
  task: e.target.value
})
}
handleTasksSubmit = (e)=>{
  e.preventDefault();

  this.setState({
    tasks: [...this.state.tasks, this.state.task]
  })

}
handleSubmit = (e) =>{
e.preventDefault()
this.props.addProjectToState(this.state)
this.props.history.push("/")
}

 render() {
  return (
    <div>
  <Div>
        <Form id="projectform" onSubmit={this.handleSubmit}>
          <ProductHeader {...this.props} />
          <ProductLabel
            htmlFor="Project"
          >
PROJECT NAME
            {' '}
            <br />
          </ProjectLabel>
          <Input
            type="text"
            id="Project"
            name="projectName"
            onChange={this.handleChange}
          />


      <div>
      <Label  style={{
        display: 'flex',
        borderBottom: '1px solid '+greySky,
        width: '100%',

      }} >
DURATION
        {' '}
        <br />
        <Input type="text" name="duration"  onChange={this.handleChange}/>
      </Label>
      </div>
      </div>
    
    </Form>
    
  </Div>
    <ul style={{listStyleType: 'disc', background: "#212121", paddingLeft:' 5em'}}>
      {this.state.tasks.map((task,i) =>{
        return <li key={i} style={{ color: greySky, fontSize: '1.2rem'}}>{task}</li>
      })}
    </ul>
  <TasksForm id="tasksform" onSubmit= {this.handleTasksSubmit}>
    <button type="submit" >
      <img src={addTasks} /> Add Tasks
      </button>
      <Input type="text" name="tasks"  onChange={this.handleTasksChange}/>
      </TasksForm>
      </div>
  )}
}
export default ProjectForm;

ProjectForm.propTypes = {
  addProjectToState: PropTypes.func.isRequired,
  history: PropTypes.shape(PropTypes.any).isRequired,
};
