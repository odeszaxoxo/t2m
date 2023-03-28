/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useRef } from 'react';
import Modal from 'react-modal';
import cn from 'classnames';
import useResize from 'Hooks/useResize';

Modal.setAppElement('body');

const { body } = document;

interface IModal {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  isMenu?: boolean;
  isOpen: boolean;
  setOpen: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

export default function ModalComponent({
  children,
  className,
  contentClassName,
  isMenu,
  isOpen,
  setOpen,
}: IModal) {
  const firstMount = useRef(true);
  const { isDesktop } = useResize();

  useEffect(() => {
    firstMount.current = false;
    return () => {
      firstMount.current = true;
    };
  }, []);

  useEffect(() => {
    if (isOpen && !isDesktop) {
      body.classList.add('body--stuck');
    } else {
      body.classList.remove('body--stuck');
    }
  }, [isOpen, isDesktop]);

  if (!isOpen) {
    return null;
  }

  const onAfterClose = () => {
    document.body.classList.remove('body--stuck');
  };

  const modalHolderClassNames = cn('modal', {
    'modal--menu': isMenu,
  });
  const modalClassName = cn(className, 'modal__content');
  const contentClassNames = cn('modal__inner-content', contentClassName);

  return (
    <Modal
      bodyOpenClassName="body--stuck"
      portalClassName={modalHolderClassNames}
      onAfterClose={onAfterClose}
      className={modalClassName}
      overlayClassName="modal__overlay"
      onRequestClose={() => {
        setOpen(false);
      }}
      isOpen={isOpen}
    >
      <div className={contentClassNames}>{children}</div>
    </Modal>
  );
}
