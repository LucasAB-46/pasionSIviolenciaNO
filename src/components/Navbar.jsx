import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Inicio', path: '/', hoverColor: 'var(--color-ong-green)' },
    { label: 'Nosotros', path: '/nosotros', hoverColor: 'var(--color-ong-red)' },
    { label: 'Actividades', path: '/actividades', hoverColor: 'var(--color-ong-blue, #3498db)' },
    { label: 'Contacto', path: '/contacto', hoverColor: 'var(--color-ong-green)' }
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0, left: 0, width: '100%', zIndex: 50,
        background: scrolled ? 'rgba(250,250,250,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-color)' : 'none',
        transition: 'all .3s ease',
        padding: '20px 0'
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* LOGO SUPERIOR: Se le suma onClick para forzar que la pantalla suba al inicio */}
        <Link to="/" onClick={() => window.scrollTo(0, 0)} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', transition: 'opacity 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '28px', color: 'var(--color-ong-green)', letterSpacing: '2px' }}>
            PASIÓN SÍ
          </span>
          <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '28px', color: 'var(--color-ong-red)', letterSpacing: '2px', fontStyle: 'italic' }}>
            VIOLENCIA NO
          </span>
        </Link>

        <ul style={{ display: 'flex', gap: '40px', listStyle: 'none', margin: 0, padding: 0 }}>
          {links.map((link) => (
            <li key={link.label}>
              <Link 
                to={link.path} 
                onClick={() => window.scrollTo(0, 0)} /* Los enlaces del menú también fuerzan subir */
                style={{ 
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '22px',
                  letterSpacing: '2px',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={e => e.currentTarget.style.color = link.hoverColor}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-primary)'}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;