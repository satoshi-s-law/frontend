import React from 'react';
import './App.css';

import NavBar from './components/navigation/navigation';
import ProjectList from "./components/projectlist/ProjectList"
function App() {
  return (
    <div>
       <ProjectList />
      <NavBar />
    </div>
  );
}

export default App;
