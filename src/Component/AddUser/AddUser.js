import Form from "../Layout/Form";
import Button from "../Layout/Button";

const onSubmitHandler = (event) => {
  event.preventDefault();
};

const AddUser = () => {
  return (
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
  );
};

export default AddUser;
