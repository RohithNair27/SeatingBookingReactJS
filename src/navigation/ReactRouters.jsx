import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import LoginScreen from "../screens/LoginScreen";
import Home from "../screens/Home";
import CabinBooking from "../screens/CabinBooking";
import SeatBooking from "../screens/SeatBooking";
import MeetingRoomBooking from "../screens/MeetingRoomBooking";

function ReactRouters() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/home" element={<Home />} />
        <Route path="/SeatBooking" element={<SeatBooking />} />
        <Route path="/CabinBooking" element={<CabinBooking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default ReactRouters;
