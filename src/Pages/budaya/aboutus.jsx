import React, { useState, useEffect } from 'react';
import './aboutus.css';
import Navbar from './Navbar';

const About = () => {
  const [people, setPeople] = useState([
    { name: 'Rafael Nicholas Po', imgSrc: 'rafpo.png', qrImgSrc: 'qrrafpo.jpeg', quote: '' },
    { name: 'Nicholas Andre Natalino', imgSrc: 'andre.png', qrImgSrc:'qrandre.png', quote: '' },
    { name: 'Leonard Augusto Bantoro', imgSrc: 'leo.png', qrImgSrc:'qrleo.png', quote: '' },
    { name: 'Ryan Erlanda Steffen', imgSrc: 'ryan.png', qrImgSrc:'qrryan.jpeg', quote: '' },
  ]);
  useEffect(() => {
    const fetchQuotes = async () => {
      const category = 'happiness';
      const apiKey = 'X8pIL+xecJ1zxRoYJVUjvA==efbPRJVPSDnH4xmj';

      const promises = people.map(async (person, index) => {
        const response = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
          method: 'GET',
          headers: { 'X-Api-Key': apiKey },
          contentType: 'application/json'
        });
        const data = await response.json();
        if (data.length > 0) {
          return { ...person, quote: data[index % data.length].quote };
        }
        return person;
      });

      const updatedPeople = await Promise.all(promises);
      setPeople(updatedPeople);
    };

    fetchQuotes();
  }, []);

  return (
    <div className="page-container d-flex justify-content-center align-items-center">
      <Navbar />
      <div className="title-container">
      </div>
      <div className="kartu-container">
        {people.map((person, index) => (
          <div className="kartu" key={index}>
            <div className="konten-kartu">
              <h2>{person.name}</h2>
              <img src={person.qrImgSrc} className="qr-kode" alt={`QR code for ${person.name}`} />
              <p>{person.quote}</p>
            </div>
            <img src={person.imgSrc} alt={person.name} className="foto-kartu" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
