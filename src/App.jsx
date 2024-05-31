import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom"; // Perhatikan penulisan Route dan Routes
import Home from './Pages/budaya/home'; // Pastikan penulisan path menuju home.jsx yang benar
import Yogya from './Pages/budaya/yogya';
import Menubudaya from './Pages/budaya/menubudaya';
import Menumakanan from './Pages/budaya/menumakanan';
import Menuwisata from './Pages/budaya/menuwisata';
import Menupantai from "./Pages/budaya/menupantai";
import Detailbudaya from './Pages/budaya/detailbudaya';
import Detailmakanan from './Pages/budaya/detailmakanan';
import Detailwisata from './Pages/budaya/detailwisata'; 
import Detailpantai from "./Pages/budaya/detailpantai";
import budayas from "./Pages/strukturmenu/budayas";
import foods from "./Pages/strukturmenu/foods";
import wisatas from "./Pages/strukturmenu/wisatas";
import pantais from "./Pages/strukturmenu/pantais";
import News from "./Pages/budaya/News";
import About from "./Pages/budaya/aboutus";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/yogya" element={<Yogya />} /> {/* Perhatikan penulisan path untuk Yogya */}
        <Route path="/menubudaya" element={<Menubudaya budayas={budayas} />} />
        <Route path="/menumakanan" element={<Menumakanan foods={foods} />} />
        <Route path="/menuwisata" element={<Menuwisata wisatas={wisatas} />} />
        <Route path="/menupantai" element={<Menupantai pantais={pantais} />} />
        <Route path="/detailbudaya/:id" element={<Detailbudaya budaya={budayas} />} />
        <Route path="/detailmakanan/:id" element={<Detailmakanan food={foods} />} />
        <Route path="/detailwisata/:id" element={<Detailwisata wisatas={wisatas} />} />
        <Route path="/detailpantai/:id" element={<Detailpantai pantais={pantais} />} />
        <Route path="/news" element={<News />} />
        <Route path="/aboutus" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;