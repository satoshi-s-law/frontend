import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/homePage/homePage';
import AddTask from './components/projects/addTask';

function App() {
  return (
    <div>
<<<<<<< HEAD
       <ProjectList />
        <NavBar />
=======
      <Route exact path="/" component={HomePage} />
      <Route exact path="/add-task" component={AddTask} />
>>>>>>> e518f26daa499c8c53f2674d3b9fa014c016dc90
    </div>
  );
}

export default App;
