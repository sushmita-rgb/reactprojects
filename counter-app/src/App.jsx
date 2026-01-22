import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    setCounter((prevCounter) => {
      if (prevCounter < 20) {
        return prevCounter + 1;
      }
      return prevCounter;
    });
  };

  const removeValue = () => {
    setCounter((prevCounter) => {
      if (prevCounter > 0) {
        return prevCounter - 1;
      }
      return prevCounter;
    });
  };

  return (
    <>
      <h1>Chai aur React ☕</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>

      <br />

      <button onClick={removeValue}>Remove value</button>

      <p>Footer: {counter}</p>
    </>
  );
}

export default App;
