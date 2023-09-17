import styled from '@emotion/styled';
import { colors, transition } from 'styles/common/vars';

export const CardItem = styled.li`
  position: relative;
  width: 274px;
`;

export const AddToWishlistBtn = styled.button`
  position: absolute;
  margin: 0;
  padding: 0;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;
  font-size: 18px;

  color: ${colors.primaryWhite};
  background-color: transparent;
  border: none;

  transition: color ${transition.duration};

  &:hover,
  &:focus {
    color: ${colors.accentHoverColor};
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 268px;
  margin-bottom: 14px;

  border-radius: 14px;
  object-fit: cover;
`;

export const CardTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 8px;

  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;

  span {
    color: ${colors.accentColor};
  }
`;

export const CardPrice = styled.h4`
  font-weight: 500;
`;

export const CardDetailsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 4px;
  column-gap: 6px;

  margin-bottom: ${({ marginBottom }) => marginBottom || '28px'};

  font-size: 12px;
  line-height: 1.5;
`;

export const CardDetailsItem = styled.li`
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${colors.secondaryFontColor};

  &:not(:last-child) {
    &::after {
      content: '';
      display: inline-block;
      margin: 0;
      width: 1px;
      height: 16px;
      background-color: ${colors.primaryFontColor};
      opacity: 0.1;
    }
  }
`;

export const LearnMoreButton = styled.button`
  padding: 12px 98px;

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
