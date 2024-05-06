import "./App.css";
import Counter from "./Counter";
function handleClick() {
  alert("button clicked");
}
const handleClick2 = () => {
  alert("button 2 clicked");
};

const addToFive = (num) => {
  alert(num + 5);
};

function App() {
  return (
    <>
      <h3>React core concepts 2</h3>
      <Counter></Counter>



      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me</button>
      <button
        onClick={() => {
          alert("third clicked");
        }}
      >
        Click Me 3
      </button>
      {/* vejailla */}
      <button onClick={() => addToFive(3)}>Five</button>
    </>
  );
}

export default App;
