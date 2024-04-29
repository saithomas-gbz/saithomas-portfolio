import { styled } from "styled-components";

export const List = styled.ul`
  
`;

export const ListItem = styled.li`
  font-size: 14px;

  color: ${props => props.theme.textcolor}
`;

export const IconList = styled(List)`
  list-style: none;
  padding: 0 0 0 20px;
  font-size: 14px;
`;

export const IconItem = styled(ListItem)`
  display: flex;
  gap: 10px;
  align-items: center;
`;