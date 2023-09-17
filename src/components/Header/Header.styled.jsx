import styled from '@emotion/styled';
import { colors } from 'styles/common/vars';

export const PageHeader = styled.header`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 100px;
  background-color: ${colors.secondaryFontColor};
`;

export const PageLogo = styled.img`
  width: 150px;
  max-height: 100%;
`;
