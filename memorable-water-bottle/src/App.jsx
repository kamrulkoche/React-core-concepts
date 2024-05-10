import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Bottles from "./components/Bottles/Bottles";

function App() {
  const [count, setCount] = useState(0);
  // localStorage.setItem("cart", "70,80,90,100");
  // localStorage.setItem("cart2", "7,8,9,10");
  // const storedCartString = localStorage.getItem("cart");
  // console.log(storedCartString);
  // localStorage.removeItem("cart");
  // localStorage.clear();

  return (
    <>
      <Header></Header>
      <Bottles></Bottles>
    </>
  );
}

export default App;
