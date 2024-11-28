import React from "react";
import { Routes, Route } from "react-router-dom";
import MyBooking from "./pages/MyBooking";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MyBooking />} />
    </Routes>
  );
};

export default App;
