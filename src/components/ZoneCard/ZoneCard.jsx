import React from "react";
import "./ZoneCard.css";
import { IoPersonCircleOutline } from "react-icons/io5";

function ZoneCard({ zone, Desk, AvailableSeats, SelectedZone, onSelectZone }) {
  return (
    <div className="Zonecard-body">
      <button
        className={
          zone === SelectedZone ? "Zonecard-button-selected" : "Zonecard-button"
        }
        onClick={() => {
          onSelectZone(zone);
        }}
      >
        <p>{`Zone ${zone}`}</p>
        <div className="Zonecard-info">
          <span>{`${Desk} Desks`}</span>
          <span>{`${AvailableSeats} seats available`}</span>
        </div>
        <div className="Zonecard-icons">
          <IoPersonCircleOutline color="gray" size={35} />
          <IoPersonCircleOutline color="gray" size={35} />
          <IoPersonCircleOutline color="gray" size={35} />
          <span>+68</span>
        </div>
      </button>
    </div>
  );
}

export default ZoneCard;
