import React from 'react';
import Bannerpantai from './bannerpantai';
import Navbar from './Navbar';
import Mapspantai from './mapspantai';
import Isipantai from './isipantai';
import { useParams, useNavigate } from 'react-router-dom';
import infopantai from './infopantai'; 
import "./menu.css";

const Detailpantai = () => {
  const { id } = useParams();
  const pantai = infopantai.find(item => item.id === parseInt(id));
  const navigate = useNavigate();

  if (!pantai) {
      return <div>Product details not found</div>;
  }

  return (
      <div>
        <Navbar />
        <Bannerpantai />
        <Isipantai />
        <Mapspantai />
        <button onClick={() => navigate(-1)} className="previous-button">
        Previous Page
      </button>
      </div>
  );
};


export default Detailpantai;