import React from "react";
import "./InfoCard.css";
import Slider from "../UIcomponents/Slider/Slider";
function InfoCard({ selectedSeatData }) {
  return (
    <div className="InfoCard-body">
      <button className="cancelButton">Cancel</button>
      <div className="InfoCard-infoBody">
        <span>
          Seat no: <span>{selectedSeatData.seatNumber}</span>
        </span>
        <span>
          Cubicle: <span>{selectedSeatData.cubicle}</span>
        </span>
        <span>
          Zone: <span>{selectedSeatData.zone}</span>
        </span>
        <span>
          Timings: <span>{selectedSeatData.timings}</span>
        </span>
        <span>
          Date: <span>{selectedSeatData.date}</span>
        </span>
      </div>

      <div className="InfoCard-switch">
        <span>Check In</span>
        <Slider />
        <span>Check Out</span>
      </div>
    </div>
  );
}

export default InfoCard;
