import React from 'react';
import styled from 'styled-components';
import ProductHeader from './ProductHeader';
import addTasks from "./addtasks.png"
import { thisExpression } from '@babel/types';
const greySky = '#979797'
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
    
    </form>
    
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
