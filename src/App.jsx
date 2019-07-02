import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/homePage/homePage';
import AddTaskForm from './components/NewProjectForm/AddTaskForm';
import axios from 'axios'


class App extends React.Component {


    state = {
        projects: []
    }

    componentDidMount() {
      //get clients
      axios
      .get('https://api.clockify.me/api/v1/workspaces/5cf6e9a6b07987371ebcf369/clients', {
        headers: {
          'X-Api-Key' : 'XPbc4lnaZRbCOFAB'
        }
      } 
      ).then(res => {
        console.log(res)
        this.setState({
          // clients: res.data[0].name,
          // clientPic: 'https://www.pinclipart.com/picdir/middle/12-129912_clip-art-images-sad-face-icon-png-transparent.png'
        }) 
      }).catch(err => {
        console.log(err)
      })  
      
      axios
      .get('https://api.clockify.me/api/v1/workspaces/5cf6e9a6b07987371ebcf369/projects', {
        headers: {
          'X-Api-Key' : 'XPbc4lnaZRbCOFAB'
        }
      } 
      ).then(res => {
        console.log(res)
        this.setState({
          // projectList : [
          //   {
          //     projectName: res.data.name,
          //     clientName: res.data.clientName,
          //     hourlyRate: res.data.hourlyRate            
          //   }
          // ]
          projects: res.data
        }) 
      }).catch(err => {
        console.log(err)
      })
  
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
      <Route exact path="/" render={()=> <HomePage  projects={this.state.projects} {...this.props} submitAddTask={this.submitAddTask} />} />
      <Route exact path="/add-task" render={(props)=>(
        <AddTaskForm  projectList={this.state.projectList} addProjectToState={this.addProjectToState} {...props}/>
        )}/>
    </div>
  )
}
}

export default App;
