import { memo, useCallback, useState } from "react";

//  useMemo use kro
function App() {
  const [counter, setCounter] = useState(0);

  const inputFunction = useCallback(() => {
    console.log("hi There!");
  }, []);

  return (
    <div>
      <Button inputFunction={inputFunction} />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Click Me {counter}
      </button>
    </div>
  );
}

const Button = memo(({ inputFunction }) => {
  console.log("child rerender");

  return (
    <div>
      <button onClick={inputFunction}>Button Clicked</button>
    </div>
  );
});

export default App;
