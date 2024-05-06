import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./Todo";
import Actor from "./Actor";
import Singer from "./singer";
import BookStore from "./BookStore";

function App() {
  const actors = ["Sakib", "Raj", "Jasim", "Rubel", "Salman Shah"];

  const books = [
    { id: 1, name: "Physics", price: 100 },
    { id: 2, name: "Math", price: 120 },
    { id: 3, name: "Chemistry", price: 130 },
    { id: 4, name: "Biology", price: 150 },
  ];

  const singers = [
    { id: 1, name: "Dr Mahfuzur Rahman", age: 68 },
    { id: 2, name: "Eva Rahman", age: 38 },
    { id: 3, name: "pritom ", age: 28 },
  ];
  return (
    <>
      <h1>Vite + React</h1>
      <BookStore books={books}></BookStore>

      {singers.map((singer) => (
        <Singer singer={singer}></Singer>
      ))}

      {/* <Actor name={"Bappa Raz"}></Actor>
      {actors.map((actor) => (
        <Actor name={actor}></Actor>
      ))} */}
      {/* <Todo 
      task="Learn React" 
      isDone={true}></Todo>
      <Todo 
      task="Explore Core concepts" 
      isDone={false}></Todo>
      <Todo 
      task="Try JSX" 
      isDone={true}></Todo> */}

      {/* <Device name="Laptop" price="55"></Device>
      <Device name="Phone" price="20"></Device>
      <Device name="Watch" price="3"></Device>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person />
      <Person />
      <Student grade="7" score="99"></Student>
      <Student grade="12" score="22"></Student>
      <Student></Student> */}
    </>
  );
}

function Device(props) {
  // console.log(props);
  return (
    <h2>
      This device:{props.name}price:{props.price}
    </h2>
  );
}

function Person() {
  const age = 25;
  const money = 20;
  const person = { name: "Sakib", age: 21 };
  return (
    <h3>
      I am {person.name} with age:{age}
    </h3>
  );
}

// const {grade,score}={grade:'7',score:'99'};
function Student({ grade = 1, score = "0" }) {
  console.log(grade, score);
  return (
    <div>
      <h3>This is a student</h3>
      <p>Class:{grade}</p>
      <p>Score:{score}</p>
    </div>
  );
}

export default App;
