import React from 'react';
import styled from 'styled-components';

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
`;

const Input = styled.input`
    border: none;
    outline: none;
    background-color: #212121;
    color: white;
    border-left: ${props => (props.primary ? '1px solid white' : 'none')};
`;

const ProjectForm = () => (
  <Div>
    <form>
      <Label>
CLIENT NAME
        {' '}
        <br />
        <Input type="text" />
      </Label>
      <div style={{
        display: 'flex',
        border: '1px solid white',
        width: '100%',
      }}
      >
        <div style={{ width: '50%' }}>
          <Label>
              START TIME
            {' '}
            <br />
            <Input type="text" />
          </Label>
        </div>
        <div style={{ borderLeft: '1px solid white' }}>
          <Label>
            END TIME
            {' '}
            <br />
            <Input type="text" />
          </Label>
        </div>
      </div>
      <div style={{ display: 'flex', border: '1px solid white' }}>
        <Label>
          DURATION
          {' '}
          <br />
          <Input type="text" />
        </Label>
      </div>
    </form>
  </Div>
);

export default ProjectForm;
