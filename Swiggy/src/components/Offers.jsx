import React from "react";

export const Offers = (props) => {
  return (
    <section className="offers">
      <div className="container">
        {props.offers.map((offer, index) => {
          return <img className="offer" src={offer} key={index} />;
        })}
      </div>
    </section>
  );
};
