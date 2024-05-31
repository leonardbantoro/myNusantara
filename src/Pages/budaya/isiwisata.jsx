import React from "react";
import { useParams } from 'react-router-dom';
import infowisata from './infowisata';
import Card from './CardBudaya';
import VideoCard from "./VideoCard";

function Isiwisata() {
    const { id } = useParams();
    const wisata = infowisata.find(item => item.id === parseInt(id));

  return (
    <div>
        <Card
          title={wisata.title0}
          penjelasan={wisata.description1}
        />
        <Card
          title={wisata.title1}
          penjelasan={wisata.description2}
          imgurl={wisata.img0}
        />
        <Card
          title={wisata.title2}
          penjelasan={wisata.description3}
          imgurl={wisata.img1}
        />
        {(wisata.description4) && <Card 
                          title={wisata.title3}
                          penjelasan={wisata.description4}
                          imgurl={wisata.img2}
                        />}
        {(wisata.description5) && <Card 
                          title={wisata.title4}
                          penjelasan={wisata.description5}
                          imgurl={wisata.img3}
                        />}

        <VideoCard 
          videoSrc={wisata.vidURL} 
          title={wisata.vidTitle}
        />

    </div>
  );
}
export default Isiwisata;
