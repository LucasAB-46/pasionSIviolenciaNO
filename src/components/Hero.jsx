import React from 'react';
import { Link } from 'react-router-dom';
import pasionImg from '../assets/images/pasion.png';
import { tickerData } from '../data/hero';

const Hero = () => {
  // Colores para intercalar en la barra
  const tickerColors = ['var(--color-ong-green)', 'var(--color-ong-red)', 'var(--color-ong-blue, #3498db)'];

  return (
    <section id="inicio" style={{ width: '100%', display: 'flex', flexDirection: 'column', background: 'transparent', position: 'relative', overflow: 'hidden' }}>
      
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', paddingTop: '160px', paddingBottom: '80px', zIndex: 1, position: 'relative' }}>
        
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', width: '100%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '64px', alignItems: 'center' }}>
          
          <div>
            <div className="animate-fade-up" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: 999, padding: '8px 16px', marginBottom: 32 }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-ong-green)', display: 'inline-block' }} />
              <span style={{ color: 'var(--text-muted)', fontSize: 12, fontFamily: "'DM Sans', sans-serif", letterSpacing: 3, textTransform: 'uppercase' }}>
                ONG • Lugano, Ciudad Autónoma de Buenos Aires
              </span>
            </div>

            <h1 className="animate-fade-up animate-delay-1" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(4rem, 8vw, 7.5rem)', lineHeight: 0.85, color: 'var(--text-primary)', margin: '0 0 24px', letterSpacing: '1px' }}>
              PASIÓN<br />
              <span style={{ color: 'var(--color-ong-green)' }}>SÍ</span>{' '}
              <span style={{ color: 'var(--color-ong-red)', fontStyle: 'italic' }}>VIOLENCIA</span><br />
              NO
            </h1>

            <p className="animate-fade-up animate-delay-2" style={{ color: 'var(--text-muted)', fontSize: 18, fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7, marginBottom: 48, maxWidth: '500px' }}>
              Transformamos la realidad a través del deporte, la cultura y los valores.
              Acompañamos a niños y jóvenes con contención, construyendo un futuro con respeto, inclusión y oportunidades reales.
            </p>

            <div className="animate-fade-up animate-delay-3" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link to="/actividades" style={{ background: 'var(--color-ong-green)', color: '#fff', padding: '16px 40px', borderRadius: 12, fontWeight: 700, fontSize: 17, textDecoration: 'none', fontFamily: "'DM Sans', sans-serif", transition: 'transform 0.2s', textAlign: 'center' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
                VER ACTIVIDADES
              </Link>
              <Link to="/nosotros" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', padding: '16px 40px', borderRadius: 12, fontWeight: 700, fontSize: 17, textDecoration: 'none', fontFamily: "'DM Sans', sans-serif", transition: 'background 0.3s', textAlign: 'center' }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,0,0,0.03)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--bg-secondary)'}>
                CONOCERNOS
              </Link>
            </div>
          </div>

          <div className="animate-fade-up animate-delay-2" style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <img src={pasionImg} alt="Niños y valores" style={{ width: '100%', maxWidth: '600px', aspectRatio: '4/3', borderRadius: '32px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', objectFit: 'cover', position: 'relative', zIndex: 1 }} />
          </div>

        </div>
      </div>

      {/* Ticker Inferior (Animado y con Colores) */}
      <div style={{ borderTop: '1px solid var(--border-color)', background: 'var(--ticker-bg)', padding: '16px 0', width: '100%', overflow: 'hidden', position: 'relative', zIndex: 10 }}>
        <div className="animate-marquee">
          {/* Duplicamos el array para que el scroll infinito nunca quede en blanco */}
          {[...tickerData, ...tickerData].map((item, i) => (
            <span key={i} style={{ 
              fontFamily: "'Bebas Neue', sans-serif", 
              color: tickerColors[i % 3], /* Cicla entre Verde, Rojo y Celeste */
              fontSize: 22, 
              letterSpacing: 3, 
              margin: '0 40px' 
            }}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;