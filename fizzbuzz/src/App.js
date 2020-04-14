import React from "react";
import logo from "./logo.svg";
import Layout from "./components/Layout";
import "./App.css";

function App() {
  const number = 100;
  return (
    <div className="App">
      <h2>FizzBuzz</h2>
      <Layout number={number} />
    </div>
  );
}

export default App;
