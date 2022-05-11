import { Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const BackDrop = ({ close }) => (
  <div className={styles.backDrop} onClick={close}></div>
);

const Overlay = () => <div className={styles.overlay}></div>;

const Modal = ({ show, closeModal }) => {
  return (
    show && (
      <Fragment>
        {ReactDOM.createPortal(
          <Fragment>
            <BackDrop close={closeModal} />
            <Overlay />
          </Fragment>,
          document.getElementById("modal")
        )}
      </Fragment>
    )
  );
};

export default Modal;
