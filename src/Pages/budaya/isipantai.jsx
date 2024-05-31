import React from "react";
import { useParams } from 'react-router-dom';
import infopantai from './infopantai';
import Card from './CardBudaya';
import VideoCard from "./VideoCard";

function Isipantai() {
    const { id } = useParams();
    const pantai = infopantai.find(item => item.id === parseInt(id));

  return (
    <div>
        <Card
          title={pantai.title0}
          penjelasan={pantai.description1}
        />
        <Card
          title={pantai.title1}
          penjelasan={pantai.description2}
          imgurl={pantai.img0}
        />
        <Card
          title={pantai.title2}
          penjelasan={pantai.description3}
          imgurl={pantai.img1}
        />
        {(pantai.description4) && <Card 
                          title={pantai.title3}
                          penjelasan={pantai.description4}
                          imgurl={pantai.img2}
                        />}
        {(pantai.description5) && <Card 
                          title={pantai.title4}
                          penjelasan={pantai.description5}
                          imgurl={pantai.img3}
                        />}

        <VideoCard 
          videoSrc={pantai.vidURL} 
          title={pantai.vidTitle}
        />

    </div>
  );
}
export default Isipantai;
