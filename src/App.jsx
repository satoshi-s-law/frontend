import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/navigation/navigation';
import AddTask from './components/projects/addTask';

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={NavBar} />
        <Route exact path="/add-task" component={AddTask} />
      </Router>
    </div>
  );
}

export default App;
