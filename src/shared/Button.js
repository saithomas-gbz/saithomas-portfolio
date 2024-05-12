import styled from 'styled-components';


export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ThemeButton = styled.button`
  color: ${(props) => props.theme.textcolor};
  border: solid 1px ${(props) => props.theme.textcolor};
  padding: 8px 16px; 
  border-radius: 8px;
  background-color: ${(props) => props.theme.textcolor};
  color: ${(props) => props.theme.bgcolor};
  transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  margin: 8px;

  &:active {
    background-color: ${(props) => props.theme.bgcolor};
    color: ${(props) => props.theme.textcolor};
    transform: scale(0.95);
  }
`;