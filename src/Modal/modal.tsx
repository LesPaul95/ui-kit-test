import React from 'react';
import { StyledModal, Wrapper, StyledCloseIcon, Title } from './modal-styles';

export type ModalProps = {
  opened: boolean;
  handleClose: () => void;
  children: JSX.Element;
  closeButton?: boolean;
  title?: string;
  canselButtonLable?: string;
  disableBackdropClick?: boolean;
  backgroundColor?: string;
};

export const Modal = ({
  opened,
  handleClose,
  children,
  closeButton = false,
  disableBackdropClick = false,
  backgroundColor,
  title,
}: ModalProps) => {
  return (
    <StyledModal open={opened} onClose={handleClose} disableBackdropClick={disableBackdropClick}>
      <Wrapper backgroundColor={backgroundColor}>
        {closeButton && <StyledCloseIcon onClick={handleClose} />}
        {title && <Title>{title}</Title>}
        {children}
      </Wrapper>
    </StyledModal>
  );
};
