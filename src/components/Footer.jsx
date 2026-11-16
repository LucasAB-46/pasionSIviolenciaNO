import React from 'react';
import { Link } from 'react-router-dom';
import { redes, lema } from '../data/contacto';
import RedesIcon from './RedesIcon';

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
          ONG con base en Lugano, CABA<br />
          Trabajamos 100% ad honorem por los chicos y chicas.<br />
          <em style={{ fontFamily: 'var(--font-accent)', color: 'var(--text-primary)' }}>{lema}</em>
        </p>

        {/* Redes */}
        <div style={{ display: 'flex', gap: 10 }}>
          {redes.map(r => (
            <a key={r.nombre} href={r.url} target="_blank" rel="noopener noreferrer" aria-label={r.nombre}
              style={{ width: 40, height: 40, borderRadius: '50%', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-ong-green)', transition: 'background 0.2s, color 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-ong-green)'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--color-ong-green)'; }}
            >
              <RedesIcon nombre={r.nombre} size={18} />
            </a>
          ))}
        </div>
        
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