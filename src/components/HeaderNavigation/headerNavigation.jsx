import React from "react";
import "./HeaderNavigation.css";
import { Link } from "react-router-dom";
import { IoPersonCircleOutline } from "react-icons/io5";
import Button from "../NavigationButton/NavigationButton";
import image from "../../Assets/AppIcon.png";

function HeaderNavigation() {
  return (
    <div className="header">
      <header className="HomeTop">
        <div className="SeatAllocationHeader">
          <img src={image} alt="image" className="Icon" />
          <div className="SeatAllocationText">
            <h1>Seat Allocation</h1>
            <p>Book your seats</p>
          </div>
        </div>
        <div className="logoutContainer">
          <h3>Welcome Rohith</h3>
          <IoPersonCircleOutline color="gray" size={60} />
          <div className="logout-button">
            <Button className={"btn-submit-gray"} placeHolder={"Log out"} />
          </div>
        </div>
      </header>
      <nav className="headerBody">
        <Link
          to={"/home"}
          style={{ textDecoration: "none" }}
          className="nav-link"
        >
          <span>Home</span>
        </Link>
        <Link
          to={"/seatBooking"}
          style={{ textDecoration: "none" }}
          className="nav-link"
        >
          <span>Seat Booking</span>
        </Link>
        <Link
          to={"/CabinBooking"}
          style={{ textDecoration: "none" }}
          className="nav-link"
        >
          <span>Cabin Booking</span>
        </Link>
        <Link
          to={"/MeetingRoomBooking"}
          style={{ textDecoration: "none" }}
          className="nav-link"
        >
          <span>Meeting Room Booking</span>
        </Link>
      </nav>
    </div>
  );
}

export default HeaderNavigation;
