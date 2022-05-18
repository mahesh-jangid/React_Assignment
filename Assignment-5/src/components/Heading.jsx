import React from "react";

export const Heading = (props) => {
  return (
    <>
      <div className="heading d-flex justify-content-start mt-4">
        <h2>
          <strong>{props.heading}</strong>
        </h2>
      </div>
      <div className="sub_heading d-flex justify-content-start mt-4 ">
        <h2>
          <strong>{props.subHeading}</strong>
        </h2>
      </div>
    </>
  );
};
