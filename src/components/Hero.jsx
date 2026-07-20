import React from 'react';
import { Link } from 'react-router-dom';
import pasionImg from '../assets/images/pasion.png';
import { tickerData } from '../data/hero';

const Hero = () => {
  const tickerColors = ['var(--color-ong-green)', 'var(--color-ong-red)', 'var(--color-ong-blue, #3498db)'];

  return (
    <section id="inicio" style={{ width: '100%', display: 'flex', flexDirection: 'column', background: 'transparent', position: 'relative', overflow: 'hidden' }}>
      
      {/* 1. Ajustamos el padding-top para que en celulares no quede un hueco tan gigante debajo del Navbar */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', paddingTop: 'clamp(120px, 15vh, 160px)', paddingBottom: 'clamp(40px, 10vh, 80px)', zIndex: 1, position: 'relative' }}>
        
        {/* 2. MAGIA RESPONSIVE: minmax(min(100%, 320px), 1fr) hace que si la pantalla es menor a 320px, la grilla se encoja y no desborde */}
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(16px, 5vw, 24px)', width: '100%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 'clamp(32px, 8vw, 64px)', alignItems: 'center' }}>
          
          <div>
            <div className="animate-fade-up" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: 999, padding: '8px 16px', marginBottom: 32 }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-ong-green)', display: 'inline-block', flexShrink: 0 }} />
              <span style={{ color: 'var(--text-muted)', fontSize: 'clamp(10px, 3vw, 12px)', fontFamily: "'DM Sans', sans-serif", letterSpacing: 3, textTransform: 'uppercase' }}>
                ONG • Lugano, CABA
              </span>
            </div>

            {/* 3. Redujimos el límite mínimo del texto de 4rem a 3rem. Ahora la palabra "VIOLENCIA" entra perfecto en mobile */}
            <h1 className="animate-fade-up animate-delay-1" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3rem, 12vw, 7.5rem)', lineHeight: 0.85, color: 'var(--text-primary)', margin: '0 0 24px', letterSpacing: '1px' }}>
              PASIÓN<br />
              <span style={{ color: 'var(--color-ong-green)' }}>SÍ</span>{' '}
              <span style={{ color: 'var(--color-ong-red)', fontStyle: 'italic' }}>VIOLENCIA</span><br />
              NO
            </h1>

            <p className="animate-fade-up animate-delay-2" style={{ color: 'var(--text-muted)', fontSize: 'clamp(16px, 4vw, 18px)', fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7, marginBottom: 48, maxWidth: '500px' }}>
              Transformamos la realidad a través del deporte, la cultura y los valores.
              Acompañamos a niños y jóvenes con contención, construyendo un futuro con respeto, inclusión y oportunidades reales.
            </p>

            <div className="animate-fade-up animate-delay-3" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link to="/actividades" style={{ background: 'var(--color-ong-green)', color: '#fff', padding: '16px clamp(24px, 5vw, 40px)', borderRadius: 12, fontWeight: 700, fontSize: 16, textDecoration: 'none', fontFamily: "'DM Sans', sans-serif", transition: 'transform 0.2s', textAlign: 'center', flex: '1 1 auto' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
                VER ACTIVIDADES
              </Link>
              <Link to="/nosotros" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', padding: '16px clamp(24px, 5vw, 40px)', borderRadius: 12, fontWeight: 700, fontSize: 16, textDecoration: 'none', fontFamily: "'DM Sans', sans-serif", transition: 'background 0.3s', textAlign: 'center', flex: '1 1 auto' }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,0,0,0.03)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--bg-secondary)'}>
                CONOCERNOS
              </Link>
            </div>
          </div>

          {/* 4. El contenedor de la imagen ahora garantiza que no desborde con un width: 100% estricto */}
          <div className="animate-fade-up animate-delay-2" style={{ display: 'flex', justifyContent: 'center', position: 'relative', width: '100%' }}>
            {/* Los bordes de la foto también se achican en celular (clamp) para que no se vean raros */}
            <img src={pasionImg} alt="Niños y valores" style={{ width: '100%', maxWidth: '600px', aspectRatio: '4/3', borderRadius: 'clamp(16px, 5vw, 32px)', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', objectFit: 'cover', position: 'relative', zIndex: 1 }} />
          </div>

        </div>
      </div>

      <div style={{ borderTop: '1px solid var(--border-color)', background: 'var(--ticker-bg)', padding: '16px 0', width: '100%', overflow: 'hidden', position: 'relative', zIndex: 10 }}>
        <div className="animate-marquee">
          {[...tickerData, ...tickerData].map((item, i) => (
            <span key={i} style={{ 
              fontFamily: "'Bebas Neue', sans-serif", 
              color: tickerColors[i % 3], 
              fontSize: 'clamp(18px, 4vw, 22px)', /* Tamaño dinámico para la barra inferior */
              letterSpacing: 3, 
              margin: '0 clamp(20px, 4vw, 40px)' 
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