import { useState } from "react";
import "./App.css";
import Test from "./Test";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h3>React Core Concept Recap</h3>
      <ol>
        <li>Component</li>
        <li>JSX</li>
        <li>Props</li>
        <li>Even Handler</li>
        <li>State</li>
        <li>Load Data</li>
      </ol>
      <Test></Test>
    </>
  );
}

export default App;
