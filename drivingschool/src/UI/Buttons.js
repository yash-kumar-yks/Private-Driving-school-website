import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${({ backgroundColor }) => backgroundColor || 'blue'};
  height: 34px;
  color: ${({ hoverColor }) => hoverColor || 'darkblue'};
  width: 170px;
  
  border-radius: 5px;
  border: 1px solid  ${({ backgroundColor }) => backgroundColor || 'blue'};
  padding: 0 25px;
  letter-spacing: 1.5px;
  font-size: 0.75rem;
  font-weight: 400;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ hoverColor }) => hoverColor || 'darkblue'};
    color:${({ backgroundColor }) => backgroundColor || 'blue'};
  }
`;

 const Buttons = ({ children,backgroundColor, hoverColor, onClick }) => (
  <StyledButton
    backgroundColor={backgroundColor}
    hoverColor={hoverColor}
    onClick={onClick}
  >
    {children}
  </StyledButton>
);


export default Buttons;