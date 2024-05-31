
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import wisatas from "./infowisata";
import Card from "./strukturmenu/Card";
import "./menu.css";
import Navbar from './Navbar';

function createCard(wisata) {
  return (
    <div className="col-lg-4 mb-4 d-flex justify-content-center" key={wisata.id}>
      <Link to={{
        pathname: `/detailwisata/${wisata.id}`,
        state: { name: wisata.name } // Pass additional information
      }} className="card-link">
        <div className="card">
          <div className="contact-card  contact-card-content">
            <Card
              name={wisata.name}
              imgURL={wisata.imgURL}
              meaning={wisata.meaning}
            />
          </div>
        </div>
      </Link>
    </div>
  );
}

const Menuwisata = () => {
  const navigate = useNavigate();

  return (
    <div className="container text-center">
      <Navbar />
      <div className="row mt-5 p-5">
        {wisatas.map(createCard)}
      </div>
      <button onClick={() => navigate(-1)} className="previous-button">
        Previous Page
      </button>
    </div>
  );
}
export default Menuwisata;
