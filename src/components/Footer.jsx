import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    // Chau fondo '#0a0a0a' (negro), ahora usa el color claro de tu tema
    <footer style={{ background: 'var(--bg-secondary)', padding: '48px 24px', borderTop: '1px solid var(--border-color)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
        
        {/* Logo interactivo en el Footer con scroll automático hacia arriba */}
        <Link to="/" onClick={() => window.scrollTo(0, 0)} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', transition: 'opacity 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 22, letterSpacing: 4, color: 'var(--color-ong-green)' }}>PASIÓN SÍ</div>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 15, letterSpacing: 6, color: 'var(--color-ong-red)', fontStyle: 'italic' }}>VIOLENCIA NO</div>
        </Link>
        
        {/* Ubicación Actualizada y texto adaptado al fondo claro */}
        <p style={{ color: 'var(--text-muted)', fontSize: 14, fontFamily: "'DM Sans', sans-serif", textAlign: 'center', margin: 0 }}>
          ONG • Lugano, Ciudad Autónoma de Buenos Aires<br />
          Trabajamos 100% ad honorem por los chicos del barrio.
        </p>
        
        {/* Tu firma interactiva: Enlace real y color Rojo */}
        <div style={{ color: 'var(--text-muted)', fontSize: 13, fontFamily: "'DM Sans', sans-serif" }}>
          Web por{' '}
          <a 
            href="https://innovatibylb.com.ar/" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ 
              color: 'var(--color-ong-red)', /* Color ROJO */
              fontWeight: 700, 
              textDecoration: 'none',
              transition: 'opacity 0.2s'
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            InnovaTI by LB
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;