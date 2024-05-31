import React from "react";
import "./banner.css";
import { useParams } from 'react-router-dom';
import infowisata from './infowisata';

function Bannerwisata() {
  const { id } = useParams();
  const wisata = infowisata.find(item => item.id === parseInt(id));

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
            src={wisata.imgURL}
            className="d-block w-100"
            alt="..."
          />

        </div>
      </div>          <div className="carousel-caption">
            <h5>Wisata</h5>
            <p>{wisata.name}</p>
          </div>
    </div>
  );
}
export default Bannerwisata;
