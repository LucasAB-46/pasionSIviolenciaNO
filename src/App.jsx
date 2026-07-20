// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Actividades from './pages/Actividades';
import Contacto from './pages/Contacto';

function App() {
  return (
    <Router>
      <main style={{ position: 'relative', minHeight: '100vh', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)', display: 'flex', flexDirection: 'column', overflowX: 'hidden' }}>

        <Navbar />

        <div style={{ flex: 1, position: 'relative', zIndex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/actividades" element={<Actividades />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <Footer />
        </div>

        {/* BOTONES FLOTANTES: la clase floating-actions los achica/reposiciona en mobile,
            ver reglas @media agregadas en index.css */}
        <div className="floating-actions" style={{ position: 'fixed', bottom: '32px', right: '32px', zIndex: 100, display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Link to="/contacto" className="floating-btn" style={{
            background: 'var(--color-ong-green)', color: '#fff', padding: '16px 24px',
            borderRadius: '50px', fontWeight: 700, fontSize: '15px', textDecoration: 'none',
            fontFamily: 'var(--font-body)', textAlign: 'center',
            boxShadow: '0 10px 20px rgba(76,122,79,0.35)', transition: 'transform 0.2s'
          }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
            SUMARTE
          </Link>
          <Link to="/contacto" className="floating-btn" style={{
            background: 'var(--color-ong-red)', color: '#fff', padding: '16px 24px',
            borderRadius: '50px', fontWeight: 700, fontSize: '15px', textDecoration: 'none',
            fontFamily: 'var(--font-body)', textAlign: 'center',
            boxShadow: '0 10px 20px rgba(180,80,46,0.35)', transition: 'transform 0.2s'
          }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
            DONAR
          </Link>
        </div>

      </main>
    </Router>
  );
}

export default App;
