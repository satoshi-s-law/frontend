import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    position: absolute;
    bottom: 10%;
    left: 65%;

    @media (min-width: 750px) {
        left: 90%
    }

`;
const Icon = () => (
  <Div>
    <i className="fas fa-plus-circle" style={{ color: 'green', fontSize: '100px' }} />
  </Div>
);

export default Icon;
