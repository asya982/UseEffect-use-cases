import { useEffect, useState } from "react";
import "./App.css";
import Cat from "./Cat";

// SYNTAX:
// useEffect(callback, [, dependencies]) - Hook for handling side-effects

function App() {
  const [count, setCount] = useState(0);

  // Example of trigger some actions depend on state changes
  // Be careful if you change the state, useEffect depends on
  // you should at least have some limitation, to avoid infinite rerender

  // N.B. Cleaning function also be called when dependency changes

  useEffect(() => {
    if (count > 5) {
      setCount(0);
    }

    return () => {
      console.log("*swap* *swap*");
    };
  }, [count]);

  return (
    <>
      <h1>useEffect use cases</h1>
      <div className="card">
        <Cat />
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
