import React, { useContext, useState } from "react";
import { countContext } from "./context";

export default function App() {
  const [count, setCount] = useState(0);

  // wrap anyone that wanted to use the teleported value inside a provider
  return (
    <div>
      <countContext.Provider value={count}>
        <Count count={count} setCount={setCount} />
      </countContext.Provider>
    </div>
  );
}

function Count({ setCount }) {
  return (
    <div>
      <CountRenderer />
      <Button setCount={setCount} />
    </div>
  );
}

function CountRenderer() {
  const count = useContext(countContext);
  return <div>{count}</div>;
}

function Button({ setCount }) {
  const count = useContext(countContext);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}
