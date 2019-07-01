import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/homePage/homePage';
import AddTaskForm from './components/NewProjectForm/AddTaskForm';

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/add-task" component={AddTaskForm} />
    </div>
  );
}

export default App;
