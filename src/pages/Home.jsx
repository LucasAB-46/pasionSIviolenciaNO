// src/pages/Home.jsx
import React from 'react';
import Hero from "../components/Hero";

// Ahora los importamos desde la misma carpeta (pages)
import Nosotros from "./Nosotros"; 
import Actividades from "./Actividades";

// Asumimos que Testimonios sigue en la carpeta components
import Testimonios from "../components/Testimonios";

const Home = () => {
  return (
    <>
      <Hero />
      <Nosotros />
      <Actividades />
      <Testimonios />
    </>
  );
};

export default Home;