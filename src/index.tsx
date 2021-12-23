import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./styles.css";
import App from "./App";

export const Index: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
