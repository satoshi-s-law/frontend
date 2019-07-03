
import React from "react";

import styled from "styled-components";
import ProductHeader from "./ProductHeader";
import addTasks from "./addtasks.png";
import { thisExpression } from "@babel/types";
const greySky = "#979797";

const Div = styled.div`
  display: flex;
  background-color: #212121;
  width: 100%;
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

const Label = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  color: white;
  font-size: 12px;
  font-family: "Montserrat";
  margin-left: 1em;
`;


const Input = styled.input`
  border: none;
  outline: none;
  background-color: #212121;
  color: white;
  border-left: ${props => (props.primary ? "1px solid " + greySky : "none")};
  font-family: "Montserrat";
`;

const TasksForm = styled.form`
background: #212121;
display: flex;
   justify-content: left;
   padding: 1em 0;
   flex-direction: column;
  
 button{
   background: #212121;
   color:${greySky};
   border: none;
   width: 50%;

 }
 input{
  border-bottom: 1px solid ${greySky}
  width: 100%;
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
    console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleTasksChange = e => {
    e.preventDefault();
    console.log(e.target.name);
    if (e.target.name == "taskDuration") {
      this.setState({
        task: {
          ...this.state.task,
          taskDuration: e.target.value
        }
      });
    } else if (e.target.name == "taskValue") {
      this.setState({
        task: {
          ...this.state.task,
          taskValue: e.target.value
        }
      });
    }
    console.log(this.state);
  };
  handleTasksSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.setState({
      tasks: [...this.state.tasks, this.state.task]
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addProjectToState(this.state);
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <Div>
          <form id="projectform" onSubmit={this.handleSubmit}>
            <ProductHeader {...this.props} />
            <label
              htmlFor="Project"
              style={{
                fontSize: "12px",
                paddingLeft: "1.6em",
                paddingBottom: "10px",
                background: "#383633",
                color: "#fff"
              }}
            >
              PROJECT NAME <br />
            </label>
            <input
              type="text"
              id="Project"
              style={{
                outline: "none",
                border: "none",
                paddingRight: "1.6em",
                borderBottom: "1px solid " + greySky,
                backgroundColor: "#383633",
                color: "white",
                fontSize: "16px"
              }}
              name="projectName"
              onChange={this.handleChange}
            />

            <Label>
              CLIENT NAME <br />
              <Input
                type="text"
                name="clientName"
                onChange={this.handleChange}
              />
            </Label>
            <div
              style={{
                display: "flex",
                borderTop: "1px solid " + greySky,
                width: "100%"
              }}
            >
              <div>
                <Label
                  style={{
                    display: "flex",
                    borderBottom: "1px solid " + greySky,
                    width: "100%"
                  }}
                >
                  PROJECT DURATION <br />
                  <Input
                    type="text"
                    name="duration"
                    onChange={this.handleChange}
                  />
                </Label>
              </div>
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
                borderRight: "1px solid " + greySky,
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
            <img src={addTasks} /> Add Tasks
          </button>
        </TasksForm>
      </div>
    );
  }
}
export default ProjectForm;

// ProjectForm.propTypes = {
//   addProjectToState: PropTypes.func.isRequired,
//   history: PropTypes.shape(PropTypes.any).isRequired,
// };
