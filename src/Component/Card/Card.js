import React from "react";
import styles from "././Card.module.css";

const Card = ({ arrayCard, type, deleteFunc }) => {
  const cards = arrayCard.map(({ name, age, email, city, phone }, index) => (
    <div
      className={styles.cardWrapper}
      key={index}
      style={{ backgroundColor: type === "Men" ? "Silver" : "pink" }}
    >
      <div>{name}</div>
      <div>{age}</div>
      <div>{email}</div>
      <div>{city}</div>
      <div>{phone}</div>
      <div
        className={styles.deleteBtn}
        onClick={(event) => deleteFunc(event, index)}
      >
        X
      </div>
    </div>
  ));

  return <div>{cards}</div>;
};

export default Card;
