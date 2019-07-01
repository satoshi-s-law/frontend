import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/navigation/navigation';
import AddTask from './components/projects/addTask';
import ProjectList from "./components/projectlist/ProjectLis
  
function App() {
  return (
    <div>
      <Route exact path="/" component={NavBar} />
      <Route exact path="/add-task" component={AddTask} />
       <ProjectList />
    </div>
  );
}

export default App;
