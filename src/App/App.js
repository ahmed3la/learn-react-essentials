import { Fragment, useState } from "react";
import styles from "./App.module.css";
import CardList from "../Component/CardList/CardList";
import FilterInput from "../Component/FilterInput/FilterInput";
import Modal from "../Component/Modal/Modal";
import Button from "../Component/Layout/Button";
import AddUser from "../Component/AddUser/AddUser";

const App = () => {
  //const inputEL = useRef(null);

  const [cardsToggle, setCardToggle] = useState(true);
  const [filter, setFilter] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [state, setState] = useState([
    {
      id: 1,
      name: "Ahmed",
      age: 30,
      email: "Ahmed@gmail.com",
      city: "Cairo",
      phone: "132113",
      type: "boy",
    },
    {
      id: 2,
      name: "Hassan",
      age: 40,
      email: "Hassan@gmail.com",
      city: "6 October",
      phone: "2423455",
      type: "boy",
    },
    {
      id: 3,
      name: "Ali",
      age: 50,
      email: "Ali@gmail.com",
      city: "El-Shrook",
      phone: "1156453",
      type: "boy",
    },
    {
      id: 4,
      name: "Salwa",
      age: 50,
      email: "Salwa@gmail.com",
      city: "El-Shrook",
      phone: "1156453",
      type: "girl",
    },
    {
      id: 5,
      name: "Alaa",
      age: 50,
      email: "Alaa@gmail.com",
      city: "El-Shrook",
      phone: "1156453",
      type: "girl",
    },
    {
      id: 6,
      name: "Maha",
      age: 50,
      email: "Maha@gmail.com",
      city: "El-Shrook",
      phone: "1156453",
      type: "girl",
    },
  ]);

  const deleteHandler = (e, id) => {
    //const deleteOperation = state.filter((item, i) => i !== index);
    //setState(deleteOperation);
    setState((prevState) => prevState.filter((item, i) => item.id !== id));
    console.log("-------------------------------------");
    console.log(state);
  };

  const toggleHandler = () => {
    setCardToggle(!cardsToggle);
  };
  const filterNames = (name) => {
    setFilter(name);
  };

  const namesHandler = () => {
    if (filter.length === 0) return state;

    return state.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <Fragment>
      <div className={styles.mainContaner}>
        <h1>List of Data</h1>
        <div style={{ display: "flex", marginBottom: "10px" }}>
          <Button onClick={toggleHandler} style={{ marginRight: "20px" }}>
            {cardsToggle ? "Hide Names" : "Show Names"}
          </Button>

          <Button
            style={{ marginRight: "20px" }}
            onClick={() => {
              setShowModal(true);
            }}
          >
            New Record
          </Button>
        </div>

        <div className={cardsToggle ? styles.show : styles.hide}>
          <FilterInput filteration={filterNames}></FilterInput>

          <CardList arrayCard={namesHandler()} deleteFunc={deleteHandler} />
        </div>
      </div>
      <Modal
        show={showModal}
        closeModal={() => {
          setShowModal(false);
        }}
      >
        <AddUser></AddUser>
      </Modal>
    </Fragment>
  );
};

export default App;
