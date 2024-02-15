// import { useState } from "react";

// function App() {
//   const [exchangeData, setExchangeData] = useState({});
//   const [bankData, setBankData] = useState({});

//   fetch("https://google.com/", async (res) => {
//     const data = await res.json();
//     setBankData({ income: 100 });
//   });
//   setTimeout(() => {
//     setExchangeData({
//       returns: 100,
//     });
//   }, 1000);
//   const incomeTax = (bankData.income + exchangeData.income) * 0.3;

//   return <div>hi there, your tax returns are {incomeTax}</div>;
// }

// export default App;

// UseRef -> React

import { useEffect, useRef } from "react";

function App() {
  const divRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      divRef.current.innerHTML = "10";
    }, 5000);
  }, []);

  const incomeTax = 20000;

  return (
    <div>
      hi there, your income tax returns are <div ref={divRef}>{incomeTax}</div>
    </div>
  );
}

export default App;
