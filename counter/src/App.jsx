import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const addValue = () => {
    if (count < 5) {
      setCount(count + 1);
    } else {
      alert("Max limit reach");
    }
  };
  const decreaseValue = () => {
    if (count != 0) {
      setCount(count - 1);
    } else {
      alert("Max limit reach");
    }
  };
  return (
    <>
      <h1>I am counter</h1>
      <p>{count}</p>
      <button onClick={addValue}>Increase</button>
      <button onClick={decreaseValue}>Decrease</button>
    </>
  );
}

export default App;
