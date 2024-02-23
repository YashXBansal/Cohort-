import React from "react";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilStoreID,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { coundAtom, evenSelector } from "./store/atoms/count";

export default function App() {
  return (
    <div>
      <Count />
    </div>
  );
}

function Count() {
  return (
    <div>
      <CountRenderer />
      <Button />
    </div>
  );
}

function CountRenderer() {
  const count = useRecoilValue(coundAtom);
  return <div>{count}
  <EvenCountRender/>
  </div>;
}
function EvenCountRender() {
  const isEven = useRecoilValue(evenSelector);
  return <div>{isEven ? "It is Even " : null}</div>;
}

function Button() {
  const setCount = useSetRecoilState(coundAtom);
  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}
