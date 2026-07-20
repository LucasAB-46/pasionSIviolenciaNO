import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Si el usuario abre el menú y cambia de tamaño de pantalla (o navega), lo cerramos
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const links = [
    { label: 'Inicio', path: '/', hoverColor: 'var(--color-ong-green)' },
    { label: 'Nosotros', path: '/nosotros', hoverColor: 'var(--color-ong-red)' },
    { label: 'Actividades', path: '/actividades', hoverColor: 'var(--color-ong-blue)' },
    { label: 'Contacto', path: '/contacto', hoverColor: 'var(--color-ong-green)' }
  ];

  const goTo = () => {
    window.scrollTo(0, 0);
    setOpen(false);
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0, left: 0, width: '100%', zIndex: 50,
        background: (scrolled || open) ? 'rgba(251,248,243,0.97)' : 'transparent',
        backdropFilter: (scrolled || open) ? 'blur(12px)' : 'none',
        borderBottom: (scrolled || open) ? '1px solid var(--border-color)' : 'none',
        transition: 'all .3s ease',
        padding: '16px 0'
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

        {/* Logo: en mobile se achica y va en una sola línea */}
        <Link to="/" onClick={goTo} className="navbar-logo" style={{ textDecoration: 'none', display: 'flex', alignItems: 'baseline', gap: '6px', flexShrink: 0, transition: 'opacity 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          <span style={{ fontFamily: 'var(--font-display)', color: 'var(--color-ong-green)', letterSpacing: '1px' }}>
            PASIÓN SÍ
          </span>
          <span style={{ fontFamily: 'var(--font-display)', color: 'var(--color-ong-red)', letterSpacing: '1px', fontStyle: 'italic' }}>
            VIOLENCIA NO
          </span>
        </Link>

        {/* Links de escritorio — se ocultan en mobile vía CSS (.navbar-links) */}
        <ul className="navbar-links" style={{ display: 'flex', gap: '40px', listStyle: 'none', margin: 0, padding: 0 }}>
          {links.map((link) => (
            <li key={link.label}>
              <Link
                to={link.path}
                onClick={goTo}
                style={{
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-display)',
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

        {/* Botón hamburguesa — solo visible en mobile vía CSS (.navbar-toggle) */}
        <button
          className="navbar-toggle"
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          style={{ background: 'none', border: 'none', padding: 8, cursor: 'pointer', color: 'var(--text-primary)', display: 'none' }}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Panel mobile desplegable */}
      {open && (
        <ul className="navbar-mobile-panel" style={{ listStyle: 'none', margin: 0, padding: '8px 20px 24px', display: 'flex', flexDirection: 'column', gap: 4 }}>
          {links.map((link) => (
            <li key={link.label}>
              <Link
                to={link.path}
                onClick={goTo}
                style={{
                  display: 'block',
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-display)',
                  fontSize: '26px',
                  letterSpacing: '1px',
                  padding: '10px 0',
                  borderBottom: '1px solid var(--border-color)'
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
