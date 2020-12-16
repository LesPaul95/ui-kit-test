import styled from 'styled-components';
import { Modal } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

export const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div<{ backgroundColor: string | undefined }>`
  background-color: ${(props) => props.backgroundColor || '#FFFFFF'};
  width: min-content;
  height: auto;
  padding: 27px;
  border-radius: 23px;
  position: relative;
`;

export const StyledCloseIcon = styled(CloseIcon)`
  position: absolute;
  color: #1062d8;
  width: 54px;
  height: 54px;
  cursor: pointer;
  right: -73px;
  top: 22px;
`;

export const Title = styled.div`
  font-family: Museo Sans Cyrl, sans-serif;
  text-align: center;
  color: #1062d8;
  font-weight: 600;
  font-size: 38px;
  line-height: 140%;
  letter-spacing: 0.04em;
  margin-top: 10px;
`;
