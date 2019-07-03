import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import AddTaskForm from "./components/NewProjectForm/AddTaskForm";
import CreateInvoice from "./components/CreateInvoice/CreateInvoice";
import SentInvoice from "./components/SentInvoice/SentInvoice"
class App extends React.Component {
  state = {
    projectList: [
      {
        projectName: "Code Hackathon",
        clientName: "Lambda School",
        duration: 50,
        tasks: [
          {
            taskValue: "walk the dog",
            taskDuration: 5
          }
        ]
      }
    ]
  };

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


addProjectToState = (project)=> {
  this.setState({
    projectList: [
      ...this.state.projectList, project,
    ],
  });
}


  // have this base projectlist here. In AddToTask, projectlist will push objects into it
  // Projectlsit will also map over projects, and display time accordingly
  render() {
    const { projectList } = this.state;
    return (
      <div>
        <Route exact path="/" render={() => <HomePage projectList={projectList} {...this.props} submitAddTask={this.submitAddTask} />} />
        <Route
          exact
          path="/add-task"
          render={props => (
            <AddTaskForm
              projectList={projectList}
              addProjectToState={this.addProjectToState}
              {...props}
            />
          )}
        />
        <Route
          exact
          path="/project/:id"
          render={props => <CreateInvoice projectList={projectList} {...props} />}
        />
        <Route
          exact
          path="/success"
          component={SentInvoice}
        />
      </div>
    );
  }
}

export default App;
