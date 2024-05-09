import { styled } from "styled-components";

export const List = styled.ul`
  
`;

export const ListItem = styled.li`
  font-size: 18px;
  color: ${props => props.theme.textcolor};
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const IconList = styled(List)`
  list-style: none;
  padding: 0 0 0 20px;
  font-size: 18px;
`;

export const IconItem = styled(ListItem)`
  display: flex;
  gap: 10px;
  align-items: center;
`;