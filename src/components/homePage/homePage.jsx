import React from 'react';
import Navigation from '../navigation/navigation';
import ProjectList from '../projectlist/ProjectList';
import Footer from '../Footer';
import ProjectCard from '../projectlist/ProjectCard';

const HomePage = () => (
  <div>
    <Navigation />
    <ProjectList />
    <Footer />
  </div>
);

export default HomePage;
