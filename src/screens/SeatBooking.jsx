import React, { useEffect, useState } from "react";
import "../styles/screenStyle/SeatBooking.css";
import { seatData } from "../constants/AvailableSeats";
import { CiSearch } from "react-icons/ci";
import BookASeat from "../components/BookASeat/BookASeat";
import Pagination from "../components/Pagination/Pagination";
import {
  TimeOptions,
  ZoneOptions,
  cubicleOptions,
} from "../constants/DropDownConstants";
function SeatBooking() {
  const [searchData, setSearchData] = useState({
    searchInput: "",
    Cubicle: "",
    Zone: "",
    StartTime: "",
    EndTime: "",
  });
  const [filteredData, setFilteredData] = useState([]);
  const [selectedSeat, setSelectedSeat] = useState(false);
  const onPressBookSeat = () => {
    setSelectedSeat(!selectedSeat);
  };
  const onClickReset = () => {
    setSearchData({
      searchInput: "",
      Cubicle: "",
      Zone: "",
      StartTime: "",
      EndTime: "",
    });
    setFilteredData(seatData);
  };

  const onSelectCubicle = (event) => {
    const value = event.target.value;
    setSearchData({
      ...searchData,
      Cubicle: value,
    });
  };

  const onSelectZone = (event) => {
    const value = event.target.value;
    setSearchData({
      ...searchData,
      Zone: value,
    });
  };
  const onSelectStartTime = (event) => {
    const value = event.target.value;
    setSearchData({
      ...searchData,
      StartTime: value,
    });
  };
  const onSelectEndTime = (event) => {
    const value = event.target.value;
    setSearchData({
      ...searchData,
      EndTime: value,
    });
  };
  const onSearchTextChange = (event) => {
    const value = event.target.value;
    setSearchData({
      ...searchData,
      searchInput: value,
    });
  };

  const filterData = () => {
    let newDATA = seatData
      .filter((element) => {
        return element.personName
          .toLowerCase()
          .includes(searchData.searchInput.toLowerCase());
      })
      .filter((element) => {
        return element.zone.includes(searchData.Zone);
      })
      .filter((element) => {
        return element.cubicle.includes(searchData.Cubicle);
      });
    // .filter((element) => {
    //   if (searchData.Cubicle !== "") {
    //     return element.cubicle.includes(searchData.Cubicle);
    //   }
    // });

    setFilteredData(newDATA);
  };

  useEffect(() => {
    filterData();
  }, []);

  return (
    <>
      {selectedSeat ? (
        <div className="SeatBookingDropDown">
          <BookASeat />
        </div>
      ) : (
        <>
          <div className="SeatBookingDropDown">
            <div className="seatBooking-searchBar-body">
              <label for="searchByName"></label>
              <CiSearch size={30} className="searchIcon" color="lightgray" />
              <input
                id="searchByName"
                placeholder="Search name, seat no, cubicle, zone"
                className="seatBooking-searchBar"
                onChange={onSearchTextChange}
                value={searchData.searchInput}
              />
            </div>
            <label for="cubicle"></label>

            <select
              id="cubicle"
              placeholder="Select cubicle"
              className="DropDown"
              onChange={onSelectCubicle}
              value={searchData.Cubicle}
            >
              <option value="" disabled selected hidden>
                Select cubicle
              </option>
              {cubicleOptions.map((element) => {
                return <option value={element.value}>{element.label}</option>;
              })}
            </select>
            <label for="zone"></label>
            <select
              id="zone"
              className="DropDown"
              onChange={onSelectZone}
              value={searchData.Zone}
            >
              <option value="" disabled selected hidden>
                Select zone
              </option>
              {ZoneOptions.map((element) => {
                return <option value={element.value}>{element.label}</option>;
              })}
            </select>
            <label for="timezonesFromData"></label>
            <select
              id="timezonesFromData"
              className="DropDown"
              onChange={onSelectStartTime}
              value={searchData.StartTime}
            >
              <option value="" disabled selected hidden>
                Start Time
              </option>
              {TimeOptions.map((element) => {
                return <option value={element.value}>{element.label}</option>;
              })}
            </select>
            <label for="timezonesEndDate"></label>
            <select
              id="timezonesEndDate"
              className="DropDown"
              onChange={onSelectEndTime}
              value={searchData.EndTime}
            >
              <option value="" disabled selected hidden>
                End Time
              </option>
              {TimeOptions.map((element) => {
                return <option value={element.value}>{element.label}</option>;
              })}
            </select>
            <button
              className="InfoCard-switch-button-r"
              onClick={() => onClickReset()}
            >
              Reset
            </button>
            <button
              className="InfoCard-switch-button-r"
              onClick={() => filterData()}
            >
              Search
            </button>
          </div>

          <div className="seatsData">
            <Pagination seatData={filteredData} onPress={onPressBookSeat} />
          </div>
        </>
      )}
    </>
  );
}

export default SeatBooking;
