import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import LoginScreen from "../screens/LoginScreen";
import Home from "../screens/Home";
import CabinBooking from "../screens/CabinBooking";
import MeetingRoomBooking from "../screens/MeetingRoomBooking";
import HeaderNavigation from "../components/HeaderNavigation/headerNavigation";
import SeatBooking from "../screens/SeatBooking";
function ReactRouters() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />

        <Route
          path="/home"
          element={
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <HeaderNavigation />

              <Home />
            </div>
          }
        />
        <Route
          path="/seatBooking"
          element={
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <HeaderNavigation />

              <SeatBooking />
            </div>
          }
        />
        <Route
          path="/CabinBooking"
          element={
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <HeaderNavigation />
              <CabinBooking />
            </div>
          }
        />
        <Route
          path="/MeetingRoomBooking"
          element={
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <HeaderNavigation />
              <MeetingRoomBooking />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default ReactRouters;
