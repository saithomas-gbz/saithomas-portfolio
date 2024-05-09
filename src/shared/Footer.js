import styled from 'styled-components';

export const SFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterText = styled.p`
  font-size: 14px;
  color: ${props => props.theme.footertextcolor};
`;  