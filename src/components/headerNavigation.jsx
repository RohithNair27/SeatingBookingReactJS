import React from "react";
import "../styles/componentStyles/HeaderNavigation.css";
import { Link } from "react-router-dom";
function HeaderNavigation() {
  return (
    <div className="headerBody">
      <Link to={"/seatBooking"}>SeatBooking</Link>
      <Link to={"/seatBooking"}></Link>
      <Link to={"/seatBooking"}></Link>
      <Link to={"/seatBooking"}></Link>
    </div>
  );
}

export default HeaderNavigation;
