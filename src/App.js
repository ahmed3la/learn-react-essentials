import React, { Fragment } from "react";

const App = () => {
  const divStyle = { color: "red", marginTop: "10px" };
  const name = "John";
  const arrayNames = ["John", "Jane", "Mary"];

  return (
    <Fragment>
      <p style={{ color: "red", marginTop: "10px" }}> Learn React</p>
      <div style={divStyle}>
        {name === "John" ? "Hello John," : "Hello there,"}
      </div>

      <div>
        Names:
        {arrayNames.map((name) => (
          <Fragment>
            <div>{name}</div>
            <div>{name}</div>
          </Fragment>
        ))}
      </div>
    </Fragment>
  );
};

export default App;
