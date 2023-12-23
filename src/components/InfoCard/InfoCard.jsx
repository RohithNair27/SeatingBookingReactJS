import React from "react";
import "./InfoCard.css";
import Slider from "../UIcomponents/Slider/Slider";
function InfoCard({ selectedSeatData, onPress }) {
  return (
    <div
      const
      className={`InfoCard-body ${
        selectedSeatData.status === "available"
          ? "availableColor"
          : selectedSeatData.status
          ? "seatBooking"
          : ""
      }`}
    >
      {selectedSeatData.status ? null : (
        <button className="cancelButton">Cancel</button>
      )}

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
        {selectedSeatData.status ? (
          <span>
            status: <span>{selectedSeatData.status}</span>
          </span>
        ) : null}
        {selectedSeatData.status === "occupied" ? (
          <span>
            Booked by: <span>{selectedSeatData.personName}</span>
          </span>
        ) : null}
      </div>

      {selectedSeatData.status ? (
        <div className="InfoCard-switch-button-body">
          {selectedSeatData.status == "occupied" ? null : (
            <button
              className="InfoCard-switch-button"
              onClick={() => onPress()}
            >
              Book
            </button>
          )}
        </div>
      ) : (
        <div className="InfoCard-switch">
          <span>Check In</span>
          <Slider />
          <span>Check Out</span>
        </div>
      )}
    </div>
  );
}

export default InfoCard;
