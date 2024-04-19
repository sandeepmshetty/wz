import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const mount = (el) => {
  ReactDOM.render(<App />, el);
};

if (process.env.NODE_ENV === "development") {
  const casesRoot = document.querySelector("#cases-root-node");

  if (casesRoot) mount(casesRoot);
}

export { mount };
