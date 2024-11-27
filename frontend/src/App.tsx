import React from "react";
import {Routes, Route} from "react-router-dom";
import ConfirmBooking from "./pages/ConfirmBooking";

const App: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="flex flex-row justify-center bg-black bg-opacity-[60%] bg-blur-sm">
            <ConfirmBooking
              departurePlace="Ha Noi"
              departureDate="Tuesday, 22/11/2024, 10:30 AM"
              destination="Ho Chi Minh City"
              returnDate="Saturday, 25/12/2024, 8:15 PM"
              numberOfTickets={[2, 3]}
              planeNumber="QA 205 Operated by QAirline"
              totalPrice={361500000}
            />
          </div>
        }
      />
    </Routes>
  );
};

export default App;
