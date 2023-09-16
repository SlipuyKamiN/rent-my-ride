import styled from '@emotion/styled';
import { LearnMoreButton } from 'components/CarCard/CarCard.styled';
import { colors } from 'styles/common/vars';

export const FilterForm = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  gap: 18px;
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;

  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
  color: ${colors.labelFontColor};
`;

export const FormInput = styled.input`
  padding: 14px 18px;
  border-radius: 14px;

  border: none;
  background-color: ${colors.inputBgGrayColor};

  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;

  &::placeholder {
    color: ${colors.primaryFontColor};
  }
`;

export const DataList = styled.datalist`
  width: 100%;
  background-color: ${colors.primaryWhite};
`;

export const MileageInput = styled(FormInput)`
  width: 160px;

  &:first-of-type {
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border-right: 1px solid ${colors.mileageInputBorderColor};
  }

  &:nth-of-type(2) {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }
`;

export const SubmitButton = styled(LearnMoreButton)`
  align-self: flex-end;
  width: 136px;
  height: 48px;
  padding: 14px 44px;
`;
