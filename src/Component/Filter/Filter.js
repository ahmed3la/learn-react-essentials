import { useState, useRef } from "react";
import styles from "./Filter.module.css";

const Filter = ({ filteration }) => {
  const [filter, setFilter] = useState("");
  const filterHandler = (e) => {
    const name = e.target.value;
    setFilter(name);
    filteration(name);
  };

  return (
    <div className={styles.mp}>
      <input
        type="text"
        placeholder="for test ref"
        value={filter}
        onChange={filterHandler}
      />
    </div>
  );
};

export default Filter;