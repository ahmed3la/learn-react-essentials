import { useState } from "react";
import Card from "../Card/Card";
import styles from "./App.module.css";

const App = () => {
  const [cardsToggle, setCardToggle] = useState(false);

  const [state, setState] = useState([
    {
      name: "Ahmed",
      age: 30,
      email: "Ahmed@gmail.com",
      city: "Cairo",
      phone: "132113",
    },
    {
      name: "Hassan",
      age: 40,
      email: "Hassan@gmail.com",
      city: "6 October",
      phone: "2423455",
    },
    {
      name: "Ali",
      age: 50,
      email: "Ali@gmail.com",
      city: "El-Shrook",
      phone: "1156453",
    },
  ]);

  const deleteHandler = (e, index) => {
    //const deleteOperation = state.filter((item, i) => i !== index);
    //setState(deleteOperation);
    setState((prevState) => prevState.filter((item, i) => i !== index));
    console.log("-------------------------------------");
    console.log(state);
  };

  const toggleHandler = () => {
    setCardToggle(!cardsToggle);
  };

  return (
    <div className={styles.mainContaner}>
      <h1>Boys Data</h1>
      <button style={{ marginBottom: "20px" }} onClick={toggleHandler}>
        {cardsToggle ? "Hide Names" : "Show Names"}
      </button>
      <div className={cardsToggle ? styles.show : styles.hide}>
        <Card arrayCard={state} type="Men" deleteFunc={deleteHandler} />
      </div>
    </div>
  );
};

export default App;
