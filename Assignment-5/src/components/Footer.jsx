import React from "react";
import { ArrowRight } from "react-bootstrap-icons";

export const Footer = (props) => {
  return (
    <div className="card_footer d-flex justify-content-start mt-4">
      <div className="device d-flex align-items-center justify-content-between w-100">
        <div>
          <p className="my-0">
            {props.device} - <span>Mobile</span>
          </p>
        </div>

        <div>
          <ArrowRight
            color="black"
            size={36}
            className="d-flex align-items-center justify-content-center"
          />
        </div>
      </div>
    </div>
  );
};
