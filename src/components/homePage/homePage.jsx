import React from "react";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import ProjectList from "../ProjectList/ProjectList";

const HomePage= (props)=> {
 console.log(props)

    return (
      <div>
        <Navigation />
        <ProjectList {...props} projectList={props.projectList} submitAddTask={props.submitAddTask} />
        <Footer />
      </div>
    );
  
}

export default HomePage;
