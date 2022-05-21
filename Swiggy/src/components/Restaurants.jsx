import React, { useState } from "react";
import { Restaurant } from "./Restaurant";

export const Restaurants = (props) => {
  return (
    <div className="container divider">
      <div className="cards">
        {props.data.map((item) => {
          return <Restaurant key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};
