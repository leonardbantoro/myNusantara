import React from 'react';
import Bannermakanan from './bannermakanan';
import Navbar from './Navbar';
import Mapsmakanan from './mapsmakanan';
import Isimakanan from './isimakanan';
import { useParams, useNavigate } from 'react-router-dom';
import infomakanan from './infomakanan';
import "./menu.css";

const Detailmakanan = () => {
  const { id } = useParams();
  const makanan = infomakanan.find(item => item.id === parseInt(id));
  const navigate = useNavigate();

  if (!makanan) {
      return <div>Product details not found</div>;
  }

  return (
      <div>
        <Navbar />
        <Bannermakanan />
        <Isimakanan />
        <Mapsmakanan />
        <button onClick={() => navigate(-1)} className="previous-button">
        Previous Page
      </button>
      </div>
  );
};


export default Detailmakanan;