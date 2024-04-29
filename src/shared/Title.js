import { styled } from "styled-components"

export const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: ${props => props.theme.textcolor};
  text-align: center;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.theme.textcolor};
  text-align: center;
`;

export const SecondaryTitle = styled.h3`
  font-size: 16px;
  text-decoration: underline;
  font-weight: bold;
  color: ${props => props.theme.textcolor};
  margin: 20px;
`;

export const Text = styled.p`
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  color: ${props => props.theme.textcolor};
  padding-left: 15px;
`;