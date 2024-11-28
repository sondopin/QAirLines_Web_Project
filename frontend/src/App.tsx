import React from "react";
import { Routes, Route } from "react-router-dom";
import FinalConfirmCancel from "./pages/FinalConfirmCancel";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<FinalConfirmCancel />} />
    </Routes>
  );
};

export default App;
