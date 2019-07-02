import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import AddTaskForm from './components/NewProjectForm/AddTaskForm';
import CreateInvoice from './components/CreateInvoice/CreateInvoice'

class App extends React.Component {


  state = {
    projectList : [
    {
      projectName: "Code Hackathon",
      clientName: "Lambda School",
      duration: 5,

    }
  ]
  }

    // componentDidMount() {
    //   //get clients
    //   axios
    //   .get('/workspaces/5cf6e9a6b07987371ebcf369/clients')
    //   .then(res => {
    //     console.log(res)
    //     this.setState({
    //       // clients: res.data[0].name,
    //       // clientPic: 'https://www.pinclipart.com/picdir/middle/12-129912_clip-art-images-sad-face-icon-png-transparent.png'
    //     }) 
    //   }).catch(err => {
    //     console.log(err)
    //   })  
      
    //   axios
    //   .get('/workspaces/5cf6e9a6b07987371ebcf369/projects')
    //   .then(res => {
    //     console.log(res)
    //     this.setState({
    //       // projectList : [
    //       //   {
    //       //     projectName: res.data.name,
    //       //     clientName: res.data.clientName,
    //       //     hourlyRate: res.data.hourlyRate            
    //       //   }
    //       // ]
    //       projects: res.data
    //     }) 
    //   }).catch(err => {
    //     console.log(err)
    //   })
  
    // }
  
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
        <Route exact path="/project/:id" render={(props)=>{
          return <CreateInvoice projectList={this.state.projectList} {...props} />
        }} />
    </div>
  )
}
}

export default App;
