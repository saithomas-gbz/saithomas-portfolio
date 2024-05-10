import { styled } from "styled-components";
import { colorChange } from "./Hex";
import { hexToRgb } from "./Hex";

const fadedBgColor = props => {
  const rgb = hexToRgb(props.theme.linkcolor);
  return rgb ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.1)` : "rgba(0, 0, 0, 0.1)";
};

export const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: ${props => props.theme.textcolor};
  text-align: center;
`;

export const LoadingTitle = styled(Title)`
  animation: ${colorChange} 2s infinite;
`;

export const Subtitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: ${props => props.theme.textcolor};
  text-align: center;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const SecondaryTitle = styled(Subtitle)`
  text-decoration: underline;
  font-weight: bold;
  text-align: left;
  margin: 20px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  color: ${props => props.theme.textcolor};
  padding-left: 15px;
  @media (max-width: 768px) {
    font-size: 14px;
  } 

`;

  export const LinkStyled = styled.a`
    color: ${(props) => props.theme.linkcolor};
    text-decoration: underline;
    transition: background 0.3s ease;
    border-radius: 4px;
    padding: 2px;
    &:hover {
      background: ${fadedBgColor};
    }
  `;