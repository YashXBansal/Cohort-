import React from "react";

function App() {
  return (
    <div style={{display: "inline-flex"}}>
      <CardWrapper> hi there </CardWrapper>
      <CardWrapper> hi there </CardWrapper>
      <CardWrapper> hi there </CardWrapper>
    </div>
  );
}    

function CardWrapper({ children }) {
  return (
    <div
      style={{
        border: "2px solid black",
        padding: 20,
        margin: 12,
        justifyContent: "center",
      }}
    >
      {children}
    </div>
  );
}

export default App;
