import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import foods from "./strukturmenu/foods";
import Card from "./strukturmenu/Card";
import "./menu.css";
import Navbar from './Navbar';

function createCard(food) {
  return (
    <div className="col-lg-4 mb-4 d-flex justify-content-center" key={food.id}>
      <Link to={{
        pathname: `/detailmakanan/${food.id}`,
        state: { name: food.name } // Pass additional information
      }} className="card-link">
        <div className="card">
          <div className="contact-card contact-card-content">
            <Card
              name={food.name}
              imgURL={food.imgURL}
              meaning={food.meaning}
            />
          </div>
        </div>
      </Link>
    </div>
  );
}

const Menumakanan = () => {
  const navigate = useNavigate();

  return (
    <div className="container text-center">
      <Navbar />
      <div className="row mt-5 p-5">
        {foods.map(createCard)}
      </div>
      <button onClick={() => navigate(-1)} className="previous-button">
        Previous Page
      </button>
    </div>
  );
}

export default Menumakanan;
