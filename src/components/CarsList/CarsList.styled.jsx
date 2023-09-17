import styled from '@emotion/styled';
import { colors, transition } from 'styles/common/vars';

export const ItemsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 29px;
  row-gap: 50px;
`;

export const LoadMoreBtn = styled.button`
  display: block;
  margin: 100px auto 0;
  padding: 0;
  border: none;
  background-color: transparent;

  color: ${colors.accentColor};
  font-size: 16px;
  line-height: 1.5;
  font-weight: 500;
  text-decoration: underline;

  transition: color ${transition.duration};

  &:hover,
  &:focus {
    color: ${colors.accentHoverColor};
  }
`;
