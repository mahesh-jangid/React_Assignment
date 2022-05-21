import React, { useState } from "react";

export const Restaurant = ({ item }) => {
  //   console.log(item);
  return (
    <div className="card">
      <img width="254" height="160px" src={item.src} />
      <div className="restaurant-details">
        <div className="restaurant-title">{item.name}s</div>
        <div className="restaurant-subtitle">{item.cuisine.join(", ")}</div>
      </div>
      <div className="restaurant-info">
        <div className="restaurant-ratings">
          <i className="material-icons star-icon">star</i> {item.rating}
        </div>
        .
        <div className="restaurant-delivery-timings">
          {" "}
          {item.deliveryTime} MINS
        </div>{" "}
        .
        <div className="restaurant-cost-for-two">
          ₹{item.costForOne} cost for One
        </div>
      </div>
      <div className="offer-banner">
        <span className="material-icons"> local_offer </span>
        <span className="offer-text">20% off | Use TRYNEW</span>
      </div>
    </div>
  );
};
