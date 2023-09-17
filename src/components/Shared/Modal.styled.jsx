import styled from '@emotion/styled';
import { colors } from 'styles/common/vars';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  width: 100dvw;
  height: 100dvh;

  padding: 0 20px;
  overflow-y: scroll;

  background-color: ${colors.secondaryFontColor};
  backdrop-filter: blur(4px);
`;

export const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 40px;

  width: 541px;

  overflow-y: auto;

  border-radius: 24px;

  color: ${colors.primaryFontColor};
  background-color: ${colors.primaryWhite};
`;
