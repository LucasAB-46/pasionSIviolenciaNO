import React from 'react';

const Contacto = () => {
  return (
    <main style={{ background: 'var(--bg-primary)', padding: '140px 0 100px 0', position: 'relative', minHeight: '100vh' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 64, alignItems: 'center' }}>

          {/* Columna Izquierda: Textos */}
          <div>
            <span style={{ color: 'var(--color-ong-red)', fontFamily: "'DM Sans', sans-serif", fontSize: 12, textTransform: 'uppercase', letterSpacing: 5, fontWeight: 700 }}>
              Sumate
            </span>
            
            {/* Título: El color ahora es oscuro con var(--text-primary) */}
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3.5rem, 8vw, 6.5rem)', color: 'var(--text-primary)', margin: '8px 0 24px', lineHeight: 0.9, letterSpacing: '1px' }}>
              JUNTOS<br /><span style={{ color: 'var(--color-ong-red)' }}>PODEMOS</span><br />MÁS
            </h2>
            
            {/* Texto descriptivo con var(--text-muted) */}
            <p style={{ color: 'var(--text-muted)', fontSize: 18, fontFamily: "'DM Sans', sans-serif", lineHeight: 1.8, marginBottom: 40, maxWidth: 480 }}>
              Si querés colaborar, donar, o llevar a los chicos de tu institución a vivir una experiencia única, escribinos. Cada gesto suma.
            </p>

            {/* Enlace Instagram visible */}
            <a href="https://instagram.com/pasionsi_violenciano.ong" target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 16, color: 'var(--text-primary)', textDecoration: 'none', fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 500, transition: 'transform 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateX(8px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateX(0)'}
            >
              <span style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                📸
              </span>
              @pasionsi_violenciano.ong
            </a>
          </div>

          {/* Columna Derecha: Formulario */}
          {/* Fondo secundario (blanco puro) y bordes oscuros */}
          <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: 32, padding: 48, boxShadow: '0 20px 40px rgba(0,0,0,0.04)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              
              <div>
                <label style={{ color: 'var(--text-muted)', fontSize: 12, textTransform: 'uppercase', letterSpacing: 3, fontFamily: "'DM Sans', sans-serif", fontWeight: 700, display: 'block', marginBottom: 12 }}>
                  Nombre
                </label>
                <input type="text" placeholder="Tu nombre" 
                  style={{ width: '100%', background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: 16, padding: '16px 20px', color: 'var(--text-primary)', fontFamily: "'DM Sans', sans-serif", fontSize: 16, outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.3s' }} 
                  onFocus={e => e.currentTarget.style.borderColor = 'var(--color-ong-green)'}
                  onBlur={e => e.currentTarget.style.borderColor = 'var(--border-color)'}
                />
              </div>

              <div>
                <label style={{ color: 'var(--text-muted)', fontSize: 12, textTransform: 'uppercase', letterSpacing: 3, fontFamily: "'DM Sans', sans-serif", fontWeight: 700, display: 'block', marginBottom: 12 }}>
                  Mensaje
                </label>
                <textarea rows={4} placeholder="¿Cómo querés participar?" 
                  style={{ width: '100%', background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: 16, padding: '16px 20px', color: 'var(--text-primary)', fontFamily: "'DM Sans', sans-serif", fontSize: 16, outline: 'none', resize: 'none', boxSizing: 'border-box', transition: 'border-color 0.3s' }} 
                  onFocus={e => e.currentTarget.style.borderColor = 'var(--color-ong-green)'}
                  onBlur={e => e.currentTarget.style.borderColor = 'var(--border-color)'}
                />
              </div>

              <a href="https://wa.me/5491100000000?text=Hola!%20quiero%20saber%20más%20sobre%20Pasión%20Sí%20Violencia%20No"
                target="_blank" rel="noopener noreferrer"
                style={{ background: 'var(--color-ong-green)', color: '#fff', padding: '18px', borderRadius: 16, fontWeight: 700, fontSize: 16, textDecoration: 'none', fontFamily: "'DM Sans', sans-serif", textAlign: 'center', display: 'block', marginTop: 16, boxShadow: '0 10px 20px rgba(46,204,113,0.3)', transition: 'transform 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                ENVIAR POR WHATSAPP
              </a>
              
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default Contacto;