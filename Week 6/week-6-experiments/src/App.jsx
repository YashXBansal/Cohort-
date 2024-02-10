import { useState } from "react";

function App() {
  return (
    <>
    <HeaderWithButton></HeaderWithButton>
      <Header title="The person above is a nigga"></Header>
      <Header title="The person above is a nigga"></Header>
      <Header title="The person above is a nigga"></Header>
    </>
  );
}

function HeaderWithButton() {
  const [title, setTitle] = useState("Umar");

  function random() {
    setTitle("My name is " + Math.random());
  }
  return (
    <div>
      <button onClick={random}>Click me to change the title</button>
      <Header title={title}></Header>
    </div>
  );
}
function Header({ title }) {
  return <div>{title}</div>;
}

export default App;
