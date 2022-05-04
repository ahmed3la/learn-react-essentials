import React from "react";
import Card from "../Card/Card";

const CardList = ({ arrayCard, deleteFunc }) => {
  const cards = arrayCard.map(({ id, ...otherProps }) => (
    <Card key={id} {...otherProps} id={id} deleteFunc={deleteFunc}></Card>
  ));

  return <div>{cards}</div>;
};

export default CardList;
