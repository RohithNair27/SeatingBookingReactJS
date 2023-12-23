import React, { useState } from "react";
import "../styles/screenStyle/Home.css";
import { FaMapMarkedAlt } from "react-icons/fa";
import InfoCard from "../components/InfoCard/InfoCard";
import ZoneCard from "../components/ZoneCard/ZoneCard";
import Image from "../Assets/image.png";
import { ZoneData } from "../constants/ConstantZoneTemp";
import { BookedSeatData } from "../constants/BookinTempData";
function Home() {
  const [selectedZone, setSelectedZone] = useState("A");
  const onPressZone = (zone) => {
    setSelectedZone(zone);
  };
  const backgroundStyle = {
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    filter: "blur(5px)",
  };

  return (
    <>
      <div className="HomeBody" style={backgroundStyle}></div>

      <div className="HomeElements">
        <InfoCard selectedSeatData={BookedSeatData} />

        {ZoneData.map((element) => {
          return (
            <ZoneCard
              zone={element.zone}
              Desk={element.desks}
              AvailableSeats={element.availableSeats}
              SelectedZone={selectedZone}
              onSelectZone={onPressZone}
            />
          );
        })}
      </div>
      <button
        className="HomeDownloadMap"
        onClick={() => console.log("clicked")}
      >
        <FaMapMarkedAlt color="#da0063" size={50} />
      </button>
    </>
  );
}

export default Home;
