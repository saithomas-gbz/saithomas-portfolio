import { styled } from "styled-components"

export const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: ${props => props.theme.textcolor};
  text-align: center;
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