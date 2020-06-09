import React from "react";
import Pagination from "pagination-react-hooks";

const Pagin = ({ list }) => {
  console.log(list)

  const show = (value) => (
    <li key={value.id} className="card">
      <span>{value.name}</span>
    </li>
  );
  return (
    <Pagination
      data={list}
      Show={show}
      displayNumber="7"
      previousText="Önceki"
      nextText="Sonraki"
    />
  );
};
export default Pagin;
