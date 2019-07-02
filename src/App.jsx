import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import AddTaskForm from './components/NewProjectForm/AddTaskForm';


class App extends React.Component {


    state = {
      projectList : [
      {
        projectName: "Code Hackathon",
        clientName: "Lambda School",
        timeStart: '4am',
        timeEnd: '6pm'
        
      }
    ]
    }
  
    addProjectToState = (project) =>{
      console.log(project)
      this.setState({
       
        projectList: [
          ...this.state.projectList, project
        ]
        
      
      })
    }
    submitAddTask = ()=>{
      
    }
//have this base projectlist here. In AddToTask, projectlist will push objects into it
//Projectlsit will also map over projects, and display time accordingly
  render(){
    return (
    <div>
      <Route exact path="/" render={()=> <HomePage  projectList={this.state.projectList} {...this.props} submitAddTask={this.submitAddTask} />} />
      <Route exact path="/add-task" render={(props)=>(
        <AddTaskForm  projectList={this.state.projectList} addProjectToState={this.addProjectToState} {...props}/>
        )}/>
    </div>
  )
}
}

export default App;
