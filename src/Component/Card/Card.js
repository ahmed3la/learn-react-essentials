import React from "react";
import styles from "././Card.module.css";

const Card = ({ arrayCard, deleteFunc }) => {
  const cards = arrayCard.map(
    ({ name, age, email, city, phone, type, id }, index) => (
      <div
        className={styles.cardWrapper}
        key={id}
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
    )
  );

  return <div>{cards}</div>;
};

export default Card;
