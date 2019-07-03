import React from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import ProductHeader from "./ProductHeader";
import addTasks from "./addtasks.png";
// import { thisExpression } from "@babel/types";

const greySky = "#979797";

const Div = styled.div`
    display: flex;
    background-color: #383633;
    width: 100%;
    form {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
`;
const Label = styled.label`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    color: white;
    background: #000;
    font-size: 12px;
    font-family: 'Montserrat';
    margin-bottom: 0 0 2em 0;
    border-left: ${props => (props.primary ? '1px solid '+ greySky : 'none')};
`;
const Input = styled.input`
    border: none;
    outline: none;
    background-color: #000;
    color: white;
     font-size: 1.2em;
    font-family: 'Montserrat';
    padding: 1em 0;
  
`;


const TasksForm = styled.form`
background: #383633;
display: flex;
   justify-content: left;
   padding: 1em 0;
   flex-direction: column;
  
 button{
   background: #383633;
   color:${greySky};
   border: none;
   width: 50%;

 }
 
 h2{
   color: white;
   font-family: Montserrat;
   padding-left: 1.6rem;
   font-size: 2.0rem;
   margin: 1em 0;
   text-align: center;
 }
.button-input-container{
  display: flex;
  margin: 2em 0;
  background: black;
  input{
  padding: 1em 0;
  border-bottom: 1px solid ${greySky};
    font-size: "1.6em",
  }
}
`;

class ProjectForm extends React.Component {
  state = {
    projectName: null, //string
    clientName: null, //string
    duration: null, //string hour 8
    tasks: [], // array of strings
    task: {
      taskValue: null,
      taskDuration: null
    }
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleTasksChange = e => {
    e.preventDefault();
    if (e.target.name === "taskDuration") {
      this.setState({
        task: {
          ...this.state.task,
          taskDuration: e.target.value
        }
      });
    } else if (e.target.name === "taskValue") {
      this.setState({
        task: {
          ...this.state.task,
          taskValue: e.target.value
        }
      });
    }
  };
  handleTasksSubmit = e => {
    e.preventDefault();
    const {taskDuration, taskValue} = this.state.tasks
    if(!taskDuration && !taskValue){
      toast.error('kindly add your task duration and value')
    } else {
      this.setState({
        tasks: [...this.state.tasks, this.state.task]
      });
    }
  };
  handleSubmit = e => {
    e.preventDefault();
    const {projectName, clientName, duration} = this.state;
    if (!projectName && !clientName && !duration) {
      toast.error('project name client name and duration are required')
    } else {
      this.props.addProjectToState(this.state);
      this.props.history.push("/");
    }
  };
  render() {
    return (
      <div style={{background: "black",  height: "100vh"}}>
        <Div>
          <form id="projectform" onSubmit={this.handleSubmit}>
            <ProductHeader {...this.props} />
            <label
              htmlFor="Project"
              style={{
                fontSize: "12px",
                paddingLeft: "1em",
                backgroundColor: "#383633",
                color: "#fff",
                  fontFamily: "Montserrat"
              }}
            >
              PROJECT NAME <br />

            <input
              type="text"
              id="Project"
              style={{
                outline: "none",
                border: "none",
                padding: "1em 1.6em 0 0",
                borderBottom: "1px solid " + greySky,
                backgroundColor: "#383633",
                  fontSize: "1.2em",
                  width: "100%",
                color: "white",

              }}
              name="projectName"
              onChange={this.handleChange}
            />
            </label>

            <Label>
              CLIENT NAME <br />
              <Input
                type="text"
                name="clientName"
                onChange={this.handleChange}
                style={{borderBottom: "1px solid " + greySky}}
              />
            </Label>
            <div
              style={{
                display: "flex",
                  background: "black",
                width: "100%"
              }}
            >

                <Label
                  style={{
                    display: "flex",

                    width: "100%"
                  }}
                >
                  PROJECT DURATION <br />
                  <Input
                    type="text"
                    name="duration"
                    onChange={this.handleChange}
                    style={{ borderBottom: "1px solid " + greySky}}
                  />
                </Label>

            </div>
          </form>
        </Div>
        <ul
          style={{
            listStyleType: "disc",
            background: "#212121",
            paddingLeft: " 5em"
          }}
        >
          {this.state.tasks.map((task, i) => {
            return (
              <li key={i} style={{ color: greySky, fontSize: "1.2rem" }}>
                {task.taskValue} {task.taskDuration} hrs
              </li>
            );
          })}
        </ul>

        <TasksForm id="tasksform" onSubmit={this.handleTasksSubmit}>
          <h2>Add Extra Tasks(costs more)</h2>
          <div className="button-input-container">
            <Label
              style={{
                display: "flex",

                width: "50%"
              }}
              htmlFor="taskValue"
            >
              TASK TODO
              <Input
                type="text"
                name="taskValue"
                id="taskValue"
                onChange={this.handleTasksChange}
              />
            </Label>

            <Label
              style={{
                display: "flex",
                width: "50%"
              }}
              htmlFor="taskDuration"
            >
              {" "}
              TASK DURATION (In Hours)
              <Input
                type="text"
                name="taskDuration"
                id="taskDuration"
                onChange={this.handleTasksChange}
              />
            </Label>
          </div>
          <button type="submit">
            <img src={addTasks} alt="src"/> Add Tasks
          </button>
        </TasksForm>
      </div>
    );
  }

}
export default ProjectForm;

