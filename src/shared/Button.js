import styled from 'styled-components';


export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ThemeButton = styled.button`
  color: ${props => props.theme.textcolor};
  border: solid 1px ${props => props.theme.textcolor};
  padding: 8px 16px; 
  border-radius: 8px;
  background-color: transparent;
  transition: transform: 0.3s ease;
  margin: 8px;
  &:active {
    transform: scale(0.95);
  }
`;

