import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { colors, transition } from 'styles/common/vars';

export const HeroSection = styled.section`
  padding: 160px 0;
`;

export const HeroTitle = styled.h1`
  font-size: 60px;
  font-weight: 800;
  margin-bottom: 40px;
`;

export const HeroDescription = styled.p`
  max-width: 650px;
  margin-bottom: 40px;
`;

export const HeroLink = styled(Link)`
  padding: 14px 44px;

  display: block;
  text-align: center;
  max-width: 400px;
  font-size: 18px;
  border-radius: 12px;
  background-color: ${colors.accentColor};
  transition: background-color ${transition.duration};

  &:hover,
  &:focus {
    background-color: ${colors.accentHoverColor};
  }
`;
