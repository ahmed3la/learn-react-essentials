import { Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import Form from "../Layout/Form";
import Button from "../Layout/Button";
import React from "react";

const onSubmitHandler = (event) => {
  event.preventDefault();
  console.log(event);
};

const BackDrop = ({ close, show }) => (
  <div
    className={`${styles.backDrop} ${show ? styles.showBackDrop : null}`}
    onClick={close}
  ></div>
);

const Overlay = ({ show }) => (
  <div className={`${styles.overlay} ${show ? styles.showOverlay : null}`}>
    <Form onSubmit={onSubmitHandler}>
      <Form.Controller>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Enter name"></input>
      </Form.Controller>

      <Form.Controller>
        <label htmlFor="age">Age</label>
        <input type="text" id="age" placeholder="Enter Age"></input>
      </Form.Controller>
      <Form.Controller>
        <label htmlFor="address">Address</label>
        <input type="text" id="address" placeholder="Enter Address"></input>
      </Form.Controller>
      <Form.Controller>
        <label htmlFor="phone">Phone</label>
        <input type="text" id="phone" placeholder="Enter phone"></input>
      </Form.Controller>

      <div style={{ marginTop: "20px" }}>
        <Button style={{ marginRight: "20px" }} type="submit">
          Save
        </Button>
        <Button type="reset">Reset</Button>
      </div>
    </Form>
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
