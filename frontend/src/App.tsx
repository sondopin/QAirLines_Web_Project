import React from "react";
import { Routes, Route } from "react-router-dom";
import AirplaneManagement from "./pages/AirplaneManagement";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AirplaneManagement />} />
    </Routes>
  );
};

export default App;
