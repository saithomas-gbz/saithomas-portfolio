import { styled } from "styled-components";
import { hexToRgb } from "./Hex.js";

const fadedBgColor = props => {
  const rgb = hexToRgb(props.theme.textcolor);
  return rgb ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.1)` : "rgba(0, 0, 0, 0.1)";
}

export const List = styled.ul`
  
`;

export const ListItem = styled.li`
  font-size: 18px;
  color: ${props => props.theme.textcolor};
  width: fit-content;
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
  padding: 8px;
  border-radius: 8px;
  align-items: center;
  cursor: pointer;
  &:hover { 
    background-color: ${fadedBgColor};
  }
`;