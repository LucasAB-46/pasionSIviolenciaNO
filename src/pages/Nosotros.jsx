import React from 'react';
import { HeartHandshake, Users, Sparkles, Heart } from 'lucide-react';
import { valores } from '../data/nosotros';

// Mapeo de string -> componente, así data/nosotros.js queda libre de JSX
const iconMap = { HeartHandshake, Users, Sparkles, Heart };

const Nosotros = () => (
  <main style={{ background: 'var(--bg-primary)', padding: '80px 0', position: 'relative' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>

      <div style={{ marginBottom: 48 }}>
        <span style={{ color: 'var(--color-ong-green)', fontFamily: 'var(--font-body)', fontSize: 12, textTransform: 'uppercase', letterSpacing: 5, fontWeight: 600 }}>Quiénes somos</span>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem,7vw,6rem)', color: 'var(--text-primary)', margin: '8px 0 0', lineHeight: 0.9 }}>
          NUESTRA<br /><span style={{ color: 'var(--color-ong-green)' }}>MISIÓN</span>
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 64, alignItems: 'start' }}>
        <div>
          {/* Cita destacada con la serif de acento: rompe el bloque sans-bold parejo */}
          <p style={{ fontFamily: 'var(--font-accent)', fontStyle: 'italic', fontSize: 22, color: 'var(--text-primary)', lineHeight: 1.5, marginBottom: 28, borderLeft: '3px solid var(--color-ong-green)', paddingLeft: 20 }}>
            "Cada salida, cada partido, cada evento es una oportunidad de mostrarle a un pibe que hay un mundo más grande afuera."
          </p>

          <p style={{ color: 'var(--text-muted)', fontSize: 17, fontFamily: 'var(--font-body)', lineHeight: 1.8, marginBottom: 32 }}>
            <strong style={{ color: 'var(--text-primary)' }}>Pasión Sí, Violencia No</strong> nació con un objetivo claro: demostrar que el deporte puede transformar vidas. Trabajamos desde Lugano acompañando a chicos y chicas en situación de vulnerabilidad, generando espacios seguros y experiencias que cambian perspectivas.
          </p>

          <div style={{ display: 'flex', gap: 12, alignItems: 'center', padding: 16, background: 'var(--color-ong-green-soft)', border: '1px solid rgba(76,122,79,0.2)', borderRadius: 12 }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-ong-green)', flexShrink: 0 }} />
            <span style={{ color: 'var(--color-ong-green)', fontWeight: 700, fontSize: 14, fontFamily: 'var(--font-body)' }}>Comprometidos con el desarrollo social</span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
          {valores.map(v => {
            const Icon = iconMap[v.icon];
            return (
              <div key={v.title} style={{ padding: 24, background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: 16, transition: 'border-color 0.3s, transform 0.2s', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-ong-green)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: 'var(--color-ong-green-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  {Icon && <Icon size={22} color="var(--color-ong-green)" strokeWidth={1.75} />}
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 24, color: 'var(--text-primary)', marginBottom: 8, letterSpacing: 0.5 }}>{v.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 14, fontFamily: 'var(--font-body)', lineHeight: 1.6, margin: 0 }}>{v.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </main>
);

export default Nosotros;
