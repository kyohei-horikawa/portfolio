import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./components/Header";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <div className="h-screen bg-gray-700 bg-opacity-50">
      <p>hello</p>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
