import { Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

import React from "react";

const BackDrop = ({ close, show }) => (
  <div
    className={`${styles.backDrop} ${show ? styles.showBackDrop : null}`}
    onClick={close}
  ></div>
);

const Overlay = ({ children, show }) => (
  <div className={`${styles.overlay} ${show ? styles.showOverlay : null}`}>
    {children}
  </div>
);

const Modal = ({ children, show, closeModal }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Fragment>
          <BackDrop close={closeModal} show={show} />
          <Overlay show={show}>{children}</Overlay>
        </Fragment>,
        document.getElementById("modal")
      )}
    </Fragment>
  );
};

export default Modal;
