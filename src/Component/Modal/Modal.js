import { Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import Controller from "../Layout/Controller";

const BackDrop = ({ close, show }) => (
  <div
    className={`${styles.backDrop} ${show ? styles.showBackDrop : null}`}
    onClick={close}
  ></div>
);

const Overlay = ({ show }) => (
  <div className={`${styles.overlay} ${show ? styles.showOverlay : null}`}>
    <form>
      <Controller>
        <label htmlFor="name">Name</label>
        <input type="name" placeholder="Enter name"></input>
      </Controller>
    </form>
  </div>
);

const Modal = ({ show, closeModal }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Fragment>
          <BackDrop close={closeModal} show={show} />
          <Overlay show={show} />
        </Fragment>,
        document.getElementById("modal")
      )}
    </Fragment>
  );
};

export default Modal;
