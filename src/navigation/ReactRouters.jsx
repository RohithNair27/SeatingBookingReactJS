import React, { useContext } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import LoginScreen from "../screens/LoginScreen";
import Home from "../screens/Home";
import CabinBooking from "../screens/CabinBooking";
import MeetingRoomBooking from "../screens/MeetingRoomBooking";
import HeaderNavigation from "../components/HeaderNavigation/headerNavigation";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import SeatBooking from "../screens/SeatBooking";
function ReactRouters() {
  const { isAuth } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        {isAuth ? (
          <>
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
          </>
        ) : null}
      </Routes>
    </BrowserRouter>
  );
}

export default ReactRouters;
