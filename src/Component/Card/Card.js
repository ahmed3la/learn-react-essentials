import React from "react";
import styles from "./Card.module.css";

const Card = ({ id, name, age, email, city, phone, type, deleteFunc }) => {
  return (
    <div
      className={styles.cardWrapper}
      style={{ backgroundColor: type === "boy" ? "Silver" : "pink" }}
    >
      <div>{name}</div>
      <div>{age}</div>
      <div>{email}</div>
      <div>{city}</div>
      <div>{phone}</div>
      <div
        className={styles.deleteBtn}
        onClick={(event) => deleteFunc(event, id)}
      >
        X
      </div>
    </div>
  );
};

export default Card;
