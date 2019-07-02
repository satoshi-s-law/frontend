import React from 'react';
import PropTypes, { string } from 'prop-types';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import ProjectList from '../ProjectList/ProjectList';


const HomePage = (props) => {
  const { projectList, submitAddTask } = props;
  console.log(props);
  return (
    <div>
      <Navigation />
      <ProjectList {...props} projectList={props.projects} submitAddTask={props.submitAddTask} />
      <Footer />
    </div>
  );
};

export default HomePage;

HomePage.propTypes = {
  projectList: PropTypes.arrayOf(string).isRequired,
  submitAddTask: PropTypes.func.isRequired,
};
