import React from "react";
import "./banner.css";
import { useParams } from 'react-router-dom';
import infobudaya from './infobudaya';

function Bannerbudaya() {
  const { id } = useParams();
  const budaya = infobudaya.find(item => item.id === parseInt(id));

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
            src={budaya.imgURL}
            className="d-block w-100"
            alt="..."
          />

        </div>          
          </div>
        <div className="carousel-caption">
            <h5>Budaya</h5>
            <p>Yogyakarta</p>
      </div>
    </div>
  );
}
export default Bannerbudaya;
