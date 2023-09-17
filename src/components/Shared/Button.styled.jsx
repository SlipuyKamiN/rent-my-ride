import styled from '@emotion/styled';
import { colors, transition } from 'styles/common/vars';

export const Button = styled.button`
  border-radius: 12px;
  text-align: center;

  border: none;

  color: ${colors.primaryWhite};
  background-color: ${colors.accentColor};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.42;

  transition: background-color ${transition.duration};

  &:hover,
  &:focus {
    background-color: ${colors.accentHoverColor};
  }
`;
