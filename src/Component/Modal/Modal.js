import { Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const BackDrop = () => <div className={styles.backDrop}></div>;

const Overlay = () => <div className={styles.overlay}></div>;

const Modal = () => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Fragment>
          <BackDrop />
          <Overlay />
        </Fragment>,
        document.getElementById("modal")
      )}
    </Fragment>
  );
};

export default Modal;
