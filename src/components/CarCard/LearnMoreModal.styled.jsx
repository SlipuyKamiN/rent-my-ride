import styled from '@emotion/styled';
import { colors, transition } from 'styles/common/vars';

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;

  margin: 0;
  padding: 0;

  border: none;
  background-color: transparent;

  transition: color ${transition.duration};

  &:hover,
  &:focus {
    color: ${colors.accentHoverColor};
  }
`;

export const CarImage = styled.img`
  width: 100%;
  height: 248px;
  object-fit: cover;

  border-radius: 14px;

  margin-bottom: 14px;
`;

export const CarDescription = styled.p`
  margin-bottom: 24px;

  line-height: 1.42;
`;

export const InfoBlockTitle = styled.h4`
  font-weight: 500;
  line-height: 1.42;
  margin-bottom: 8px;
`;

export const ConditionsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 24px;
  gap: 8px;
`;

export const ConditionsItem = styled.li`
  padding: 7px 14px;

  border-radius: 35px;
  background-color: ${colors.conditionsBgGrayColor};

  font-family: 'Montserrat', sans-serif;

  span {
    color: ${colors.accentColor};
    font-weight: 600;
  }
`;
