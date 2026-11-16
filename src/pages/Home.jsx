// src/pages/Home.jsx
import React from 'react';
import Hero from "../components/Hero";

// Ahora los importamos desde la misma carpeta (pages)
import Nosotros from "./Nosotros"; 
import Actividades from "./Actividades";


const Home = () => {
  return (
    <>
      <Hero />
      <Nosotros />
      <Actividades />
    </>
  );
};

export default Home;