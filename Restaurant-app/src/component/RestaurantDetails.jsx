import React from "react";

export const RestaurantDetails = (props) => {
  console.log(props.minOrder);
  return (
    <>
      <div className="delails_info">
        <h2 className="restaurant_name">{props.name}</h2>
        <p className="category_name">{props.category}</p>
        <p className="cuisine_food">{props.cuisine.join(", ")}</p>
        <p className="cost">Cost ₹{props.costForOne} for one</p>
        <p style={{ fontSize: "18px", fontWeight: "500" }}>
          {" "}
          Min ₹{props.minOrder}{" "}
          <i class="fas fa-circle" style={{ fontSize: "5px" }}></i>Up to{" "}
          {props.deliveryTime} min{" "}
        </p>
        {props.payment_methods.cash && props.payment_methods.card ? (
          <p className="payment_method"> Accepts Cash and Card payments both</p>
        ) : props.payment_methods.card ? (
          <p className="payment_method"> Accepts Card payments only</p>
        ) : (
          <p className="payment_method"> Accepts Cash payments only</p>
        )}
      </div>
      ;
    </>
  );
};
