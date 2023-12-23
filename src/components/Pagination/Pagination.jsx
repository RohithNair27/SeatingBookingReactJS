import React, { useState } from "react";
import ReactPaginate from "react-paginate";

import InfoCard from "../InfoCard/InfoCard";
import "./Pagination.css";
function Pagination({ seatData, onPress }) {
  const [data, setData] = useState(seatData);
  const [startPage, setStart] = useState(0);
  const elements_in_page = 3;
  const total_pages = Math.ceil(seatData.length / elements_in_page);
  const users_in_page = startPage * elements_in_page;

  const onPageChange = ({ selected }) => {
    setStart(selected);
  };

  return (
    <>
      {seatData
        .slice(users_in_page, users_in_page + elements_in_page)
        .map((element) => {
          return <InfoCard selectedSeatData={element} onPress={onPress} />;
        })}

      <ReactPaginate
        nextLabel=">>"
        previousLabel="<<"
        pageCount={total_pages}
        onPageChange={onPageChange}
        containerClassName="pagenation-button"
        previousLinkClassName="perviousButton"
        nextLinkClassName="nextButton"
        activeClassName="activePageNumber"
      />
    </>
  );
}

export default Pagination;
