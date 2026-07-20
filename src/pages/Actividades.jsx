import React from 'react';
import { Link } from 'react-router-dom';
import { actividades } from '../data/actividades';

const COLORS = {
  green: 'var(--color-ong-green)',
  red: 'var(--color-ong-red)',
  bg: 'var(--bg-primary)'
};

const Actividades = () => (
  <main style={{ background: COLORS.bg, padding: '140px 0', minHeight: '100vh', overflow: 'hidden' }}> 
    <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>

      {/* Encabezado Centrado */}
      <div style={{ textAlign: 'center', marginBottom: '100px' }}>
        <span style={{ color: COLORS.red, fontFamily: "'DM Sans', sans-serif", fontSize: 14, textTransform: 'uppercase', letterSpacing: 5, fontWeight: 700 }}>
          Nuestro Impacto en Lugano
        </span>
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3.5rem, 8vw, 6rem)', color: 'var(--text-primary)', margin: '16px 0 24px', lineHeight: 0.9 }}>
          NUESTRAS <span style={{ color: COLORS.green }}>ACTIVIDADES</span>
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: 18, maxWidth: 600, margin: '0 auto', fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7 }}>
          Cada salida no es solo un paseo, es mostrarles a los pibes que hay un mundo más grande esperándolos. Estas son sus historias.
        </p>
      </div>

      {/* Nuevo Diseño: Filas Intercaladas (Zig-Zag Editorial) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '120px' }}>
        {actividades.map((a, index) => {
          const isEven = index % 2 === 0; // Para saber si es par o impar e invertir el orden
          
          return (
            <div key={a.titulo} style={{ 
              display: 'flex', 
              flexDirection: isEven ? 'row' : 'row-reverse', // Intercala izquierda/derecha
              alignItems: 'center',
              gap: '64px',
              flexWrap: 'wrap' // Permite que en celulares se ponga uno abajo del otro
            }}>
              
              {/* Contenedor de la Imagen Gigante */}
              <div className="animate-fade-up" style={{ flex: '1 1 500px', position: 'relative' }}>
                {/* Cuadro decorativo desfasado atrás de la foto */}
                <div style={{ 
                  position: 'absolute', 
                  top: '24px', 
                  [isEven ? 'left' : 'right']: '-24px', // Se desfasa hacia afuera
                  width: '100%', 
                  height: '100%', 
                  background: a.color, 
                  opacity: 0.1, 
                  borderRadius: '32px', 
                  zIndex: 0 
                }}></div>
                
                {/* La Foto */}
                <div style={{ width: '100%', aspectRatio: '4/3', borderRadius: '32px', overflow: 'hidden', position: 'relative', zIndex: 1, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}>
                  {a.imagen ? (
                    <img src={a.imagen} alt={`Foto de ${a.titulo}`} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease' }} 
                         onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                         onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
                  ) : (
                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 80, background: '#f0f0f0' }}>{a.emoji}</div>
                  )}
                </div>
              </div>

              {/* Contenedor del Texto */}
              <div className="animate-fade-up animate-delay-2" style={{ flex: '1 1 400px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                  <span style={{ fontSize: 28 }}>{a.emoji}</span>
                  <span style={{ color: a.color, fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', fontFamily: "'DM Sans', sans-serif" }}>
                    {a.tag}
                  </span>
                </div>
                
                <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'var(--text-primary)', marginBottom: '24px', lineHeight: 1, letterSpacing: '1px' }}>
                  {a.titulo}
                </h3>
                
                <p style={{ color: 'var(--text-muted)', fontSize: 18, fontFamily: "'DM Sans', sans-serif", lineHeight: 1.8, marginBottom: 32 }}>
                  {a.desc}
                </p>
                
                {/* Pequeña línea decorativa del color de la actividad */}
                <div style={{ width: 60, height: 4, background: a.color, borderRadius: 2 }}></div>
              </div>

            </div>
          );
        })}
      </div>

      {/* Banner de Contacto y Donaciones */}
      <div style={{ marginTop: 140, padding: '64px 40px', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '32px', boxShadow: '0 20px 40px rgba(0,0,0,0.03)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 32 }}>
        <div>
          <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'var(--text-primary)', margin: '0 0 12px', letterSpacing: '1px' }}>
            ¿QUERÉS SUMARTE O DONAR?
          </h3>
          <p style={{ color: 'var(--text-muted)', fontFamily: "'DM Sans', sans-serif", fontSize: 18, margin: 0 }}>
            Si tu institución quiere participar, o si querés aportar para la próxima salida, escribinos.
          </p>
        </div>
        
        {/* Contenedor de los dos botones */}
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <Link to="/contacto" style={{ background: 'var(--color-ong-green)', color: '#fff', padding: '20px 40px', borderRadius: 16, fontWeight: 700, fontSize: 16, textDecoration: 'none', fontFamily: "'DM Sans', sans-serif", whiteSpace: 'nowrap', transition: 'transform 0.2s', boxShadow: '0 10px 20px rgba(46,204,113,0.3)' }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05) translateY(-4px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1) translateY(0)'}
          >
            CONTACTAR
          </Link>
          <Link to="/contacto" style={{ background: 'var(--color-ong-red)', color: '#fff', padding: '20px 40px', borderRadius: 16, fontWeight: 700, fontSize: 16, textDecoration: 'none', fontFamily: "'DM Sans', sans-serif", whiteSpace: 'nowrap', transition: 'transform 0.2s', boxShadow: '0 10px 20px rgba(231,76,60,0.3)' }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05) translateY(-4px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1) translateY(0)'}
          >
            DONAR AHORA
          </Link>
        </div>
      </div>

    </div>
  </main>
);

export default Actividades;