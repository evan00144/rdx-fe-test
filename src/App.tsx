import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage";
// import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Navigate to={"/home"} />} />
          <Route path="" element={<Navigate to={"/home"} />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
