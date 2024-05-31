
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import pantais from "./strukturmenu/pantais";
import Card from "./strukturmenu/Card";
import "./menu.css";
import Navbar from './Navbar';

function createCard(pantai) {
  return (
    <div className="col-lg-4 mb-4 d-flex justify-content-center" key={pantai.id}>
      <Link to={{
        pathname: `/detailpantai/${pantai.id}`,
        state: { name: pantai.name } // Pass additional information
      }} className="card-link">
        <div className="card">
          <div className="contact-card  contact-card-content">
            <Card
              name={pantai.name}
              imgURL={pantai.imgURL}
              meaning={pantai.meaning}
            />
          </div>
        </div>
      </Link>
    </div>
  );
}

const Menupantai = () => {
  const navigate = useNavigate();

  return (
    <div className="container text-center">
      <Navbar />
      <div className="row mt-5 p-5">
        {pantais.map(createCard)}
      </div>
      <button onClick={() => navigate(-1)} className="previous-button">
        Previous Page
      </button>
    </div>
  );
}

export default Menupantai;
