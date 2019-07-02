import React from 'react';
import PropTypes, { string } from 'prop-types';
import styled from 'styled-components';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import ProjectList from '../ProjectList/ProjectList';
import SentInvoice from '../SentInvoice/SentInvoice';

const HomePageDiv = styled.div`
  height: 100vh;
  background-color: #000000;
`;

const HomePage = (props) => {
  const { projectList, submitAddTask } = props;
  return (
    <HomePageDiv>
      <SentInvoice />
      {/* <Navigation />
      <ProjectList {...props} projectList={projectList} submitAddTask={submitAddTask} />
      <Footer /> */}
    </HomePageDiv>
  );
};

export default HomePage;

HomePage.propTypes = {
  projectList: PropTypes.arrayOf(string).isRequired,
  submitAddTask: PropTypes.func.isRequired,
};
