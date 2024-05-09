// import { useState } from "react";
import { useState } from "react";
import "./App.css";
import Watch from "./components/Watch/Watch";
import { useEffect } from "react";

function App() {
  // const watches = [
  //   { id: 1, name: "Apple Watch", price: 200 },
  //   { id: 2, name: "Samsu Watch", price: 200 },
  //   { id: 3, name: "MI Watch", price: 200 },
  // ];

  // const watches = [
  //   {
  //     id: 1,
  //     name: "Apple Watch Series 6",
  //     price: "$399",
  //   },
  //   {
  //     id: 2,
  //     name: "Samsung Galaxy Watch 4",
  //     price: "$279",
  //   },
  //   {
  //     id: 3,
  //     name: "Fitbit Sense",
  //     price: "$299",
  //   },
  //   {
  //     id: 4,
  //     name: "Garmin Venu 2",
  //     price: "$399",
  //   },
  //   {
  //     id: 5,
  //     name: "Huawei Watch GT 3",
  //     price: "$299",
  //   },
  // ];

  const [watches, setWatches] = useState([]);

  useEffect(() => {
    fetch("watches.json")
      .then((res) => res.json())
      .then((data) => setWatches(data));
  }, []);

  return (
    <>
      <h1>Vite + React</h1>
      {watches.map((watch) => (
        <Watch key={watch.id} watch={watch}></Watch>
      ))}
    </>
  );
}

export default App;
