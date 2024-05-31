import React from "react";
import "./Card.css";

const Card = ({ imgURL, name }) => {
  return (
    <div className="header">
      <img src={imgURL} className="card-img" alt={name} />
      <h3 className="nama">{name}</h3>
    </div>
  );
};

export default Card;
