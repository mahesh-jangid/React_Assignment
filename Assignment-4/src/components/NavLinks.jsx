import React from "react";

export const Navlink = (props) => {
  return (
    <ul>
      {props.links.map((link) => {
        return <li>{link}</li>;
      })}
    </ul>
  );
};
