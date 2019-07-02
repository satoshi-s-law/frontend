import React from 'react';
import PropTypes, { string } from 'prop-types';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import ProjectList from '../ProjectList/ProjectList';
import styled from 'styled-components';

const HomePageDiv = styled.div`
  height: 100vh;
  background-color: #000000;
`

const HomePage = (props) => {
  const { projectList, submitAddTask } = props;
  console.log(props);
  return (
    <HomePageDiv>
      <Navigation />
      <ProjectList {...props} projectList={projectList} submitAddTask={submitAddTask} />
      <Footer />
    </HomePageDiv>
  );
};

export default HomePage;

HomePage.propTypes = {
  projectList: PropTypes.arrayOf(string).isRequired,
  submitAddTask: PropTypes.func.isRequired,
};
