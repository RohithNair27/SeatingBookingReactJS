import React from "react";
import {
  TimeOptions,
  ZoneOptions,
  cubicleOptions,
} from "../../constants/DropDownConstants";
import "./BookASeat.css";
function BookASeat() {
  return (
    <main className="BookASeatBody">
      <h1>Book A Seat!</h1>
      <div className="DropDown-bookseat">
        <label>Username</label>
        <span>Rohith</span>
      </div>
      <div className="DropDown-bookseat">
        <label>Date</label>
        <div className="DropDowns-two">
          <input type="date" />
          <input type="date" />
        </div>
      </div>
      <div className="DropDown-bookseat">
        <label>Reserved Timings</label>
        <div className="DropDowns-two">
          <select id="timezonesFromData">
            <option value="" disabled selected hidden>
              Start Time
            </option>
            {TimeOptions.map((element) => {
              return <option value={element.value}>{element.label}</option>;
            })}
          </select>
          <select id="timezonesFromData">
            <option value="" disabled selected hidden>
              End Time
            </option>
            {TimeOptions.map((element) => {
              return <option value={element.value}>{element.label}</option>;
            })}
          </select>
        </div>
      </div>

      <div className="DropDown-bookseat">
        <label>Zone</label>
        <div className="Drop-down">
          <select id="zone">
            <option value="" disabled selected hidden>
              Select zone
            </option>
            {ZoneOptions.map((element) => {
              return <option value={element.value}>{element.label}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="DropDown-bookseat">
        <label>Cubicle</label>
        <div className="Drop-down">
          <select id="zone">
            <option value="" disabled selected hidden>
              Select Cubicle
            </option>
            {cubicleOptions.map((element) => {
              return <option value={element.value}>{element.label}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="DropDown-bookseat">
        <label>Seat number</label>
        <div className="Drop-down">
          <select id="zone">
            <option value="" disabled selected hidden>
              Select zone
            </option>
            {ZoneOptions.map((element) => {
              return <option value={element.value}>{element.label}</option>;
            })}
          </select>
        </div>
      </div>

      <div className="BookSeatsButtonBody">
        <button id="button-1">View available seats</button>
        <button id="button-2">Book</button>
        <button id="button-3">Cancel</button>
      </div>
    </main>
  );
}

export default BookASeat;
