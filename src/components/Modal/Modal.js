import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import * as PropTypes from 'prop-types';
import { ReactSVG } from 'react-svg';
import closeIcon from '../../assets/svg/close.svg';

const modalRoot = document.getElementById('modalRoot');
const Modal = ({ isOpen, onClose, className, ...props }) => {
  const element = useRef(document.createElement('div'));
  useEffect(() => {
    modalRoot.appendChild(element.current);
    const appendedElement = element.current;
    return () => modalRoot.removeChild(appendedElement);
  }, []);

  useEffect(() => {
    document.documentElement.classList[isOpen ? 'add' : 'remove']('no-scroll');
  }, [isOpen]);

  return ReactDOM.createPortal(
    isOpen ? (
      <div className="modal-overlay">
        <div role="presentation" className="modal-background" />
        <div className="modal-container">
          <ReactSVG
            className="close-modal"
            onClick={onClose}
            src={closeIcon}
            wrapper="span"
          />
          <div data-scroller className="scroller">
            {props.children}
          </div>
        </div>
      </div>
    ) : (
      <></>
    ),
    element.current,
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.bool,
  className: PropTypes.any,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
export default Modal;
