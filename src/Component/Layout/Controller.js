import styles from "./Layout.module.css";

const Controller = (props) => {
  console.log(props.children);
  return <div className={styles.control}>{props.children}</div>;
};

export default Controller;
