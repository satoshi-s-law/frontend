/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import AddTaskForm from './components/NewProjectForm/AddTaskForm';
import CreateInvoice from './components/CreateInvoice/CreateInvoice';
import SentInvoice from './components/SentInvoice/SentInvoice';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectList: [
        {
          projectName: 'Code Hackathon',
          clientName: 'Lambda School',
          duration: 5,
        },
      ],
    };
    this.addProjectToState = this.addProjectToState.bind(this);
    this.submitAddTask = this.submitAddTask.bind(this);
  }

  addProjectToState(project) {
    this.setState({
      projectList: [
        ...this.state.projectList, project,
      ],
    });
  }


  state = {
    projectList : [
    {
      projectName: "Code Hackathon",
      clientName: "Lambda School",
      duration: 5,
      tasks : []
    }
  ]


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
