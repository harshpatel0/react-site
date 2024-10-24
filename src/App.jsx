// Libraries
import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home/Home.jsx";
import UnionDispatch from "./pages/UnionDispatch/UnionDispatch.jsx";
import TestPage from "./pages/UnionDispatch/TestPage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/uniondispatch" element={<UnionDispatch />} />
        <Route path="/uniondispatch/testpage" element={<TestPage />} />
      </Routes>
    </>
  );
}

export default App;
