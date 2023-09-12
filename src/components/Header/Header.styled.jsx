import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { colors, transition } from 'styles/common/vars';

export const PageHeader = styled.header`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 90px;
  background-color: ${colors.secondaryFontColor};
`;

export const PageLogo = styled.img`
  width: 150px;
  max-height: 100%;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 25px;
`;

export const NavigationLink = styled(NavLink)`
  display: block;
  padding: 32px;

  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  transition: color ${transition.duration}, border-color ${transition.duration},
    background-color ${transition.duration};
  border-bottom: 4px solid transparent;

  &:hover,
  &:focus {
    color: ${colors.accentHoverColor};
    background-color: #fff;
  }

  &.active {
    color: ${colors.accentColor};
    border-bottom: 4px solid ${colors.accentColor};
    background-color: #fff;
  }
`;
