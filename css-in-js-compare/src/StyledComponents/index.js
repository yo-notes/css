import React from 'react';
import styled from 'styled-components';

const StyledBreak = styled.div`
  width: 160px;
  height: 60px;
  background-color: #fff8c6;
  border: 2px solid #ffc800;
  border-radius: 10px;
`;

function ScBread() {
  return <StyledBreak>BREAD🍞 by styled-components 💅</StyledBreak>;
}

export default ScBread;
