import React from 'react';

import Footer from '../Footer/Footer';
import CreateInvoice from '../CreateInvoice/CreateInvoice';
import Navigation from '../Navigation/Navigation';
import ProjectList from '../ProjectList/ProjectList';

const HomePage = () => (
  <div>
    <CreateInvoice />
    <Navigation />
    <ProjectList />
    <Footer />
  </div>
);

export default HomePage;
