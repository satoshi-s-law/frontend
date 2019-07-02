import React from 'react';
import Footer from '../Footer';
import ProjectCard from '../projectlist/ProjectCard';
import Navigation from '../Navigation/Navigation';
import ProjectList from '../ProjectList/ProjectList';

const HomePage = () => (
  <div>
    <Navigation />
    <ProjectList />
    <Footer />
  </div>
);

export default HomePage;
