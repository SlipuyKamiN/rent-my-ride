import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { Backdrop, ModalWrapper } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, toggleModal }) => {
  const handleToggleModal = event => {
    const isEventModalControlElement =
      event.target.dataset?.backdrop || event.code === 'Escape';

    if (isEventModalControlElement) {
      toggleModal();
      return;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleToggleModal);
    window.addEventListener('click', handleToggleModal);
    return () => {
      window.removeEventListener('keydown', handleToggleModal);
      window.removeEventListener('click', handleToggleModal);
    };
  });

  return createPortal(
    <Backdrop data-backdrop>
      <ModalWrapper>{children}</ModalWrapper>
    </Backdrop>,
    modalRoot
  );
};

export default Modal;
