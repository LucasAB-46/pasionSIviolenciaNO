import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <section style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '140px 24px 80px' }}>
    <div>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(4rem, 15vw, 9rem)', color: 'var(--color-ong-red)', margin: 0, lineHeight: 0.9 }}>
        404
      </h1>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, color: 'var(--text-muted)', margin: '16px 0 32px' }}>
        Esta página no existe. Pero la cancha sigue abierta.
      </p>
      <Link to="/" style={{ background: 'var(--color-ong-green)', color: '#fff', padding: '16px 32px', borderRadius: 12, fontWeight: 700, textDecoration: 'none', fontFamily: 'var(--font-body)' }}>
        VOLVER AL INICIO
      </Link>
    </div>
  </section>
);

export default NotFound;
