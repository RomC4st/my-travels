import React from "react";

const Travel = props => (
  <figure>
    <img src={props.photo} alt="mexique" />
    <figcaption>
      <blockquote>{props.destination}</blockquote>
      <cite>{props.distance} {props.country}</cite>
    </figcaption>
  </figure>
);

export default Travel;
