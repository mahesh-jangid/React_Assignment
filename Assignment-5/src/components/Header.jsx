import React from "react";

export const Header = (props) => {
  return (
    <div className="card_header d-flex align-items-center justify-content-between">
      <div className="date">{props.date}</div>
      <div className="logo">
        <img src={props.logo} alt="" width={100 + "px"} height={100 + "px"} />
      </div>
    </div>
  );
};
