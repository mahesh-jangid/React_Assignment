import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Heading } from "./Heading";
import { CardButton } from "./Button";

export const PaymentCard = (props) => {
  console.log(props);
  return (
    <div className="container text-dark">
      <div className="row">
        <div className="col-md-6 col-sm-12 mx-auto ">
          <div
            className="card py-4 px-5 mt-3"
            style={{ backgroundColor: props.color }}
          >
            <Header {...props} />
            <CardButton />
            <Heading {...props} />
            <Footer {...props} />
          </div>
        </div>
      </div>
    </div>
  );
};
