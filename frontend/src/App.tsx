import React from "react";
import { Routes, Route } from "react-router-dom";
import ViewFlight from "./pages/ViewFlight";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<ViewFlight flightNumber="QA01" />} />
    </Routes>
  );
};

export default App;
