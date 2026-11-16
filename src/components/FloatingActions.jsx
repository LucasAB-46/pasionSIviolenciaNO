import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const btnBase = {
  color: '#fff', padding: '16px 24px', borderRadius: '50px', fontWeight: 700, fontSize: '15px',
  textDecoration: 'none', fontFamily: 'var(--font-body)', textAlign: 'center', transition: 'transform 0.2s',
};
const grow = e => (e.currentTarget.style.transform = 'scale(1.05)');
const shrink = e => (e.currentTarget.style.transform = 'scale(1)');

// Botones SUMARTE / DONAR fijos.
// Se esconden: (1) en /contacto, donde ya está todo eso en pantalla,
// y (2) cuando el footer entra en pantalla, para no tapar los créditos.
// La clase floating-actions los achica/reposiciona en mobile (ver index.css).
const FloatingActions = () => {
  const { pathname } = useLocation();
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const footer = document.querySelector('footer');
    if (!footer || !('IntersectionObserver' in window)) return;
    const obs = new IntersectionObserver(([entry]) => setFooterVisible(entry.isIntersecting));
    obs.observe(footer);
    return () => obs.disconnect();
  }, []);

  const oculto = pathname === '/contacto' || footerVisible;

  return (
    <div className="floating-actions" aria-hidden={oculto} style={{
      position: 'fixed', bottom: '32px', right: '32px', zIndex: 100, display: 'flex', flexDirection: 'column', gap: '16px',
      opacity: oculto ? 0 : 1, pointerEvents: oculto ? 'none' : 'auto', transform: oculto ? 'translateY(16px)' : 'none',
      transition: 'opacity 0.3s, transform 0.3s',
    }}>
      <Link to="/contacto" tabIndex={oculto ? -1 : 0} className="floating-btn" onMouseEnter={grow} onMouseLeave={shrink}
        style={{ ...btnBase, background: 'var(--color-ong-green)', boxShadow: '0 10px 20px rgba(76,122,79,0.35)' }}>
        SUMARTE
      </Link>
      <Link to="/contacto#donar" tabIndex={oculto ? -1 : 0} className="floating-btn" onMouseEnter={grow} onMouseLeave={shrink}
        style={{ ...btnBase, background: 'var(--color-ong-red)', boxShadow: '0 10px 20px rgba(180,80,46,0.35)' }}>
        DONAR
      </Link>
    </div>
  );
};

export default FloatingActions;
