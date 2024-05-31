import React from "react";
import { useParams } from 'react-router-dom';
import infomakanan from './infomakanan';
import Card from './CardBudaya';
import VideoCard from "./VideoCard";

function Isibudaya() {
    const { id } = useParams();
    const makanan = infomakanan.find(item => item.id === parseInt(id));

  return (
    <div>
        <Card
          title={makanan.title0}
          penjelasan={makanan.description1}
        />
        <Card
          title={makanan.title1}
          penjelasan={makanan.description2}
          imgurl={makanan.img0}
        />
        <Card
          title={makanan.title2}
          penjelasan={makanan.description3}
          imgurl={makanan.img1}
        />
        {(makanan.description4) && <Card 
                          title={makanan.title3}
                          penjelasan={makanan.description4}
                          imgurl={makanan.img2}
                        />}
        {(makanan.description5) && <Card 
                          title={makanan.title4}
                          penjelasan={makanan.description5}
                          imgurl={makanan.img3}
                        />}

        <VideoCard 
          videoSrc={makanan.vidURL} 
          title={makanan.vidTitle}
        />

    </div>
  );
}
export default Isibudaya;
