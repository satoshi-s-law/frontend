import React from "react";
import Footer from "../Footer/Footer";
import Navigation from "../navigation/navigation";
import ProjectList from "../projectlist/ProjectList";

const HomePage= (props)=> {
 console.log(props)

    return (
      <div>
        <Navigation />
        <ProjectList {...props} projectList={props.projects} submitAddTask={props.submitAddTask} />
        <Footer />
      </div>
    );
  
}

export default HomePage;
