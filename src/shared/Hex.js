import { keyframes } from 'styled-components';

export const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};


export const colorChange = keyframes`
  0% { color: ${(props) => props.theme.textcolor}; }
  50% { color: #B53746; } 
  100% { color: ${(props) => props.theme.textcolor}; }
`;