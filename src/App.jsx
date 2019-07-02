import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage/HomePage';


function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
    </div>
  );
}

export default App;
