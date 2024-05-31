import React from "react";
import { useParams } from 'react-router-dom';
import infobudaya from './infobudaya';
import Card from './CardBudaya';
import VideoCard from "./VideoCard";

function Isibudaya() {
  const { id } = useParams();
  const budaya = infobudaya.find(item => item.id === parseInt(id));

  return (
    <div>
        <Card
          title={budaya.title0}
          penjelasan={budaya.description1}
        />
        <Card
          title={budaya.title1}
          penjelasan={budaya.description2}
          imgurl={budaya.img0}
        />
        <Card
          title={budaya.title2}
          penjelasan={budaya.description3}
          imgurl={budaya.img1}
        />
        {(budaya.description4) && <Card 
                          title={budaya.title3}
                          penjelasan={budaya.description4}
                          imgurl={budaya.img2}
                        />}
        {(budaya.description5) && <Card 
                          title={budaya.title4}
                          penjelasan={budaya.description5}
                          imgurl={budaya.img3}
                        />}

        <VideoCard 
          videoSrc={budaya.vidURL} 
          title={budaya.vidTitle}
        />

    </div>
  );
}
export default Isibudaya;
