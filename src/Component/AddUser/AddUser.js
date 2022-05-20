import React, { useState } from "react";
import Form from "../Layout/Form";
import Button from "../Layout/Button";

const AddUser = ({ addNewUserDataHandller, closeModal }) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    city: "",
    phone: "",
    type: "",
    email: "",
  });

  const inputHandler = (e) => {
    const key = e.target.id;
    const value = e.target.value;

    setInput((privState) => ({ ...privState, [key]: value }));
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    addNewUserDataHandller({
      id: Math.round(Math.random() * 100),
      name: input.name,
      age: input.age,
      email: input.email,
      city: input.city,
      phone: input.phone,
      type: input.type,
    });

    setInput({
      name: "",
      age: "",
      city: "",
      phone: "",
      type: "",
      email: "",
    });

    closeModal();
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <Form.Controller>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter name"
          value={input.name}
          onChange={inputHandler}
        ></input>
      </Form.Controller>
      <Form.Controller>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter email"
          value={input.email}
          onChange={inputHandler}
        ></input>
      </Form.Controller>
      <Form.Controller>
        <label htmlFor="age">Age</label>
        <input
          type="text"
          id="age"
          placeholder="Enter Age"
          value={input.age}
          onChange={inputHandler}
        ></input>
      </Form.Controller>
      <Form.Controller>
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          id="phone"
          placeholder="Enter phone"
          value={input.phone}
          onChange={inputHandler}
        ></input>
      </Form.Controller>
      <Form.Controller>
        <label htmlFor="type">Type</label>
        <input
          type="text"
          id="type"
          placeholder="Enter type"
          value={input.type}
          onChange={inputHandler}
        ></input>
      </Form.Controller>

      <Form.Controller>
        <label htmlFor="city">city</label>
        <input
          type="text"
          id="city"
          placeholder="Enter city"
          value={input.city}
          onChange={inputHandler}
        ></input>
      </Form.Controller>

      <div style={{ marginTop: "20px" }}>
        <Button style={{ marginRight: "20px" }} type="submit">
          Save
        </Button>
        <Button
          type="reset"
          onClick={() => {
            setInput({
              name: "",
              age: "",
              city: "",
              phone: "",
              type: "",
              email: "",
            });
          }}
        >
          Reset
        </Button>
      </div>
    </Form>
  );
};

export default AddUser;
