// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Actividades from './pages/Actividades';
import Contacto from './pages/Contacto';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';
import FloatingActions from './components/FloatingActions';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <main style={{ position: 'relative', minHeight: '100vh', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)', display: 'flex', flexDirection: 'column', overflowX: 'hidden' }}>

        <Navbar />

        <div style={{ flex: 1, position: 'relative', zIndex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/actividades" element={<Actividades />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <Footer />
        </div>

        <FloatingActions />

      </main>
    </Router>
  );
}

export default App;
