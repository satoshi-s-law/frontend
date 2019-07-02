import React from 'react';
import { Route } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import ProjectList from '../ProjectList/ProjectList';
import AddTaskForm from '../NewProjectForm/AddTaskForm';

const HomePage = () => {
  return(
    <div>
      <Navigation />
      <ProjectList />
      <Footer />
      <Route exact path="/add-task" component={AddTaskForm} />
      <Route exact path="/project-list" component={ProjectList} />
    </div>
  )
};

export default HomePage;
