import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeAdmin from "./pages/HomeAdmin";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeAdmin />} />
    </Routes>
  );
};

export default App;
