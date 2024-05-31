
import React from 'react';
import Bannerwisata from './bannerwisata';
import Navbar from './Navbar';
import Mapswisata from './mapswisata';
import { useParams, useNavigate } from 'react-router-dom';
import infowisata from './infowisata'
import "./menu.css";
import Isiwisata from './isiwisata';

const Detailwisata = () => {
  const { id } = useParams();
  const wisata = infowisata.find(item => item.id === parseInt(id));
  const navigate = useNavigate();

  if (!wisata) {
      return <div>Product details not found</div>;
  }

  return (
      <div>
        <Navbar />
        <Bannerwisata/>
        <Isiwisata />
        <Mapswisata />
        <button onClick={() => navigate(-1)} className="previous-button">
        Previous Page
      </button>
      </div>
  );
};


export default Detailwisata;