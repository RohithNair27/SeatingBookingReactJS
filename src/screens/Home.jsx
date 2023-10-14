import React from "react";
import HeaderNavigation from "../components/headerNavigation";
import "../styles/screenStyle/Home.css";
import Button from "../components/NavigationButton";
import { IoPersonCircleOutline } from "react-icons/io5";

function Home() {
  return (
    <div className="HomeBody">
      <div className="HomeTop">
        <div className="HeaderData">
          <div className="SeatAllocationText">
            <h1>Seat Allocation</h1>
            <p>Book your seats</p>
          </div>
          <div className="logoutContainer">
            <h3>Welcome Rohith</h3>
            <IoPersonCircleOutline color="gray" size={40} />
            <Button />
          </div>
        </div>
        <HeaderNavigation />
      </div>
      <div className="HomeBottom"></div>
    </div>
  );
}

export default Home;
