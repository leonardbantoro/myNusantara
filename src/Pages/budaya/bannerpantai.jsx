import React from "react";
import "./banner.css";
import { useParams } from 'react-router-dom';
import infopantai from './infopantai';

function Bannerpantai() {
  const { id } = useParams();
  const pantai = infopantai.find(item => item.id === parseInt(id));

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
      style={{ marginBottom: "10px" }}
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={pantai.imgURL}
            className="d-block w-100"
            alt="..."
          />

        </div>
      </div>          
      <div className="carousel-caption">
        <h5>Pantai</h5>
        <p>{pantai.name}</p>
     </div>
    </div>
  );
}
export default Bannerpantai;
