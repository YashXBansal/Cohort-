import {lazy} from "react"
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
const   Dashboard  = lazy(() => import("./Components/Dashboard")) 
const  Landing  = lazy(() => import("./Components/Landing"))

function App() {
  return (
    <div>
      <BrowserRouter>
        <Appbar></Appbar>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Appbar() {
  const navigate = useNavigate();
  return (
    <div>
    <button
      onClick={() => {
        navigate("/");
      }}
      >
      Landing Page
    </button>
    <button
      onClick={() => {
        navigate("/dashboard");
      }}
      >
      Dashboard Page
    </button>
  </div>
  )
}


export default App;
