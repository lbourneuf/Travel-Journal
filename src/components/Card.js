import React from "react";

function Card(props) {
  console.log(props);
  return (
    <div className="card">
      <img className="card-image" src={props.item.img} />
      <div className="card-stats">
        <span className="card-location">
          <h3> {props.item.location} </h3>
        </span>
        <h1> {props.item.title} </h1>
        <h4>
          {" "}
          {props.item.startDate} - {props.item.endDate}{" "}
        </h4>
        <p>{props.item.description}</p>
      </div>
    </div>
  );
}

export default Card;
