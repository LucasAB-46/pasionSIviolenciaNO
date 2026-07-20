import React from 'react';
import { valores } from '../data/nosotros';

const Nosotros = () => (
  // Quitamos minHeight y achicamos los paddings (antes 120px, ahora 80px)
  <main style={{ background: 'var(--bg-primary)', padding: '80px 0', position: 'relative' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
      
      <div style={{ marginBottom: 48 }}>
        <span style={{ color: 'var(--color-ong-green)', fontFamily: "'DM Sans', sans-serif", fontSize: 12, textTransform: 'uppercase', letterSpacing: 5, fontWeight: 600 }}>Quiénes somos</span>
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3rem,7vw,6rem)', color: 'var(--text-primary)', margin: '8px 0 0', lineHeight: 0.9 }}>
          NUESTRA<br /><span style={{ color: 'var(--color-ong-green)' }}>MISIÓN</span>
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 64, alignItems: 'start' }}>
        <div>
          <p style={{ color: 'var(--text-muted)', fontSize: 17, fontFamily: "'DM Sans', sans-serif", lineHeight: 1.8, marginBottom: 24 }}>
            <strong style={{ color: 'var(--text-primary)' }}>Pasión Sí, Violencia No</strong> nació con un objetivo claro: demostrar que el deporte puede transformar vidas. Trabajamos desde Lugano acompañando a chicos y chicas en situación de vulnerabilidad, generando espacios seguros y experiencias que cambian perspectivas.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: 17, fontFamily: "'DM Sans', sans-serif", lineHeight: 1.8, marginBottom: 32 }}>
            Cada salida, cada partido, cada evento es una oportunidad de mostrarle a un pibe que hay un mundo más grande afuera. Que merece soñar. Que no está solo.
          </p>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', padding: 16, background: 'rgba(46,204,113,0.1)', border: '1px solid rgba(46,204,113,0.2)', borderRadius: 12 }}>
            <span style={{ fontSize: 24 }}>🇦🇷</span>
            <span style={{ color: 'var(--color-ong-green)', fontWeight: 700, fontSize: 14, fontFamily: "'DM Sans', sans-serif" }}>Comprometidos con el desarrollo social</span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
          {valores.map(v => (
            <div key={v.title} style={{ padding: 24, background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: 16, transition: 'border-color 0.3s', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--color-ong-green)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border-color)'}>
              <div style={{ fontSize: 32, marginBottom: 16 }}>{v.icon}</div>
              <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 24, color: 'var(--text-primary)', marginBottom: 8 }}>{v.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: 14, fontFamily: "'DM Sans', sans-serif", lineHeight: 1.6, margin: 0 }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </main>
);

export default Nosotros;