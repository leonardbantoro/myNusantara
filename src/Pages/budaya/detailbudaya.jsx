import React from 'react';
import Bannerbudaya from './bannerbudaya';
import Navbar from './Navbar';
import Isibudaya from './isibudaya';
import { useParams, useNavigate } from 'react-router-dom';
import infobudaya from './infobudaya'; // Import additionalDetails
import "./menu.css";

const Detailbudaya = () => {
  const { id } = useParams();
  const budaya = infobudaya.find(item => item.id === parseInt(id));
  const navigate = useNavigate();

  if (!budaya) {
      return <div>Product details not found</div>;
  }

  return (
      <div>
        <Navbar />
        <Bannerbudaya />
        <Isibudaya />
        <button onClick={() => navigate(-1)} className="previous-button">
        Previous Page
      </button>
      </div>
  );
};


export default Detailbudaya;