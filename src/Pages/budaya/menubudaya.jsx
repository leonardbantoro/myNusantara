import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import budayas from "./strukturmenu/budayas";
import Card from "./strukturmenu/Card";
import "./menu.css";
import Navbar from './Navbar';

function createCard(budaya) {
  return (
    <div className="col-lg-4 mb-4 d-flex justify-content-center" key={budaya.id}>
      <Link to={{
        pathname: `/detailbudaya/${budaya.id}`,
        state: { name: budaya.name } // Pass additional information
      }} className="card-link">
        <div className="card-menu-budaya">
          <div className="contact-card  contact-card-content">
            <Card
              name={budaya.name}
              imgURL={budaya.imgURL}
              meaning={budaya.meaning}
            />
          </div>
        </div>
      </Link>
    </div>
  );
}

const Menubudaya = () => {
  const navigate = useNavigate();

  return (
    <div className="container text-center">
      <Navbar />
      <div className="row mt-5 p-5">
        {budayas.map(createCard)}
      </div>
      <button onClick={() => navigate(-1)} className="previous-button">
        Previous Page
      </button>
    </div>
  );
}

export default Menubudaya;
