import * as React from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';
import { Modal, ModalProps } from './modal';

export default {
  component: Modal,
  title: 'Modal',
};

const ModalContent = styled.div`
  width: 600px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #c4bef3;
  border-radius: 15px;
`;

export const Default = (args: ModalProps) => (
  <Modal {...args}>
    <ModalContent>Modal content</ModalContent>
  </Modal>
);

Default.args = {
  opened: true,
  handleClose: action('handleClose'),
  closeButton: true,
  backgroundColor: '#ffffff',
  title: 'Modal title',
};
