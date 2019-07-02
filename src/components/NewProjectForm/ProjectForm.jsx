/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ProductHeader from './ProductHeader';

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
    font-family: 'Montserrat';
    margin-left: 1em;
`;
const greySky = '#979797';

const Input = styled.input`
    border: none;
    outline: none;
    background-color: #212121;
    color: white;
    border-left: ${props => (props.primary ? `1px solid ${greySky}` : 'none')};
    font-family: 'Montserrat';
`;


class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectName: null,
      clientName: null,
      duration: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { addProjectToState, history } = this.props;
    addProjectToState(this.state);
    // eslint-disable-next-line react/prop-types
    history.push('/');
  }

  render() {
    return (
      <Div>

        <form id="projectform" onSubmit={this.handleSubmit}>
          <ProductHeader {...this.props} />
          <label
            htmlFor="Project"
            style={{
              fontSize: '12px',
              paddingLeft: '1.6em',
              paddingBottom: '10px',
              background: '#383633',
              color: '#fff',
            }}
          >
PROJECT NAME
            {' '}
            <br />
          </label>
          <input
            type="text"
            id="Project"
            style={{
              outline: 'none',
              border: 'none',
              paddingRight: '1.6em',
              borderBottom: `1px solid ${greySky}`,
              backgroundColor: '#383633',
              color: 'white',
              fontSize: '16px',
            }}
            name="projectName"
            onChange={this.handleChange}
          />

          <Label>
CLIENT NAME
            {' '}
            <br />
            <Input type="text" name="clientName" onChange={this.handleChange} />
          </Label>
          <div style={{
            display: 'flex',
            borderTop: `1px solid ${greySky}`,
            width: '100%',

          }}
          >

            <div>
              <Label>
DURATION
                {' '}
                <br />
                <Input type="text" name="duration" onChange={this.handleChange} />
              </Label>
            </div>
          </div>
        </form>
      </Div>
    );
  }
}
export default ProjectForm;

ProjectForm.propTypes = {
  addProjectToState: PropTypes.func.isRequired,
  history: PropTypes.shape(PropTypes.any).isRequired,
};
