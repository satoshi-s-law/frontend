import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/homePage/homePage';
import AddTask from './components/projects/addTask';

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/add-task" component={AddTask} />
    </div>
  );
}

export default App;
