import React from 'react';
import Footer from '../Footer/Footer';

import ProjectCard from '../Projectlist/ProjectCard';
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
