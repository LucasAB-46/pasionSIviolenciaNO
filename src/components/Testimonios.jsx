import React from 'react';

const testimoniosData = [
  {
    nombre: "María, mamá de Thiago",
    texto: "Desde que mi hijo participa en la ONG, lo noto mucho más contento y contenido. Fue hermoso verlo cumplir su sueño de conocer a los jugadores de la Selección.",
    rol: "Familia del barrio"
  },
  {
    nombre: "Javier",
    texto: "El trabajo que hacen por los pibes es increíble. No solo es llevarlos a eventos, es enseñarles valores, respeto y darles un lugar seguro donde pertenecer.",
    rol: "Vecino y colaborador"
  }
];

const Testimonios = () => {
  return (
    <section style={{ padding: '80px 0', background: 'var(--bg-primary)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <span style={{ color: 'var(--color-ong-blue, #3498db)', fontFamily: "'DM Sans', sans-serif", fontSize: 12, textTransform: 'uppercase', letterSpacing: 5, fontWeight: 600 }}>
            Voces de la comunidad
          </span>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3rem,7vw,6rem)', color: 'var(--text-primary)', margin: '8px 0 0', lineHeight: 0.9 }}>
            LO QUE <span style={{ color: 'var(--color-ong-blue, #3498db)' }}>DICEN</span> DE NOSOTROS
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {testimoniosData.map((t, index) => (
            <div key={index} style={{ 
              padding: 40, 
              background: 'var(--bg-secondary)', 
              border: '1px solid var(--border-color)', 
              borderRadius: 24,
              position: 'relative',
              boxShadow: '0 10px 30px rgba(0,0,0,0.03)'
            }}>
              <div style={{ fontSize: 64, color: 'rgba(0,0,0,0.05)', position: 'absolute', top: 16, right: 24, fontFamily: 'serif', lineHeight: 1 }}>"</div>
              
              <p style={{ color: 'var(--text-muted)', fontSize: 16, fontFamily: "'DM Sans', sans-serif", lineHeight: 1.8, marginBottom: 32, position: 'relative', zIndex: 1 }}>
                "{t.texto}"
              </p>
              
              <div>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 24, color: 'var(--text-primary)', letterSpacing: 1 }}>
                  {t.nombre}
                </div>
                <div style={{ color: 'var(--color-ong-green)', fontSize: 12, fontFamily: "'DM Sans', sans-serif", textTransform: 'uppercase', letterSpacing: 2, fontWeight: 600, marginTop: 4 }}>
                  {t.rol}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonios;