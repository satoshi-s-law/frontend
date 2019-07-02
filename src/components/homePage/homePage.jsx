import React from 'react';
import Footer from '../Footer/Footer';
import ProjectCard from '../Projectlist/ProjectCard';
import Navigation from '../navigation/Navigation';
import ProjectList from '../Projectlist/ProjectList';

const HomePage = () => (
  <div>
    <Navigation />
    <ProjectList />
    <Footer />
  </div>
);

export default HomePage;
