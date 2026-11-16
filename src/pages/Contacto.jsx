import React, { useState } from 'react';
import { contacto, donaciones, redes, lema } from '../data/contacto';
import RedesIcon from '../components/RedesIcon';
import { Smartphone, Camera, MessageCircle } from 'lucide-react';

const labelStyle = {
  color: 'var(--text-muted)', fontSize: 12, textTransform: 'uppercase', letterSpacing: 3,
  fontFamily: 'var(--font-body)', fontWeight: 700, display: 'block', marginBottom: 12,
};

const fieldStyle = {
  width: '100%', background: 'var(--bg-primary)', border: '1px solid var(--border-color)',
  borderRadius: 16, padding: '16px 20px', color: 'var(--text-primary)', fontFamily: 'var(--font-body)',
  fontSize: 16, outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.3s',
};

const focusOn = e => (e.currentTarget.style.borderColor = 'var(--color-ong-green)');
const focusOff = e => (e.currentTarget.style.borderColor = 'var(--border-color)');

const igUrl = redes[0].url;

// Fila "dato + botón copiar" para alias/CBU
const DatoCopiable = ({ label, valor }) => {
  const [copiado, setCopiado] = useState(false);
  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(valor);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch {
      /* navegador sin permiso de portapapeles: no hacemos nada */
    }
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, padding: '14px 0', borderBottom: '1px solid var(--border-color)', flexWrap: 'wrap' }}>
      <div>
        <div style={labelStyle}>{label}</div>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 18, fontWeight: 700, color: 'var(--text-primary)', wordBreak: 'break-all', marginTop: -6 }}>{valor}</div>
      </div>
      <button type="button" onClick={copiar} style={{ background: 'var(--color-ong-red-soft)', color: 'var(--color-ong-red)', border: 'none', borderRadius: 10, padding: '10px 16px', fontWeight: 700, fontFamily: 'var(--font-body)', cursor: 'pointer' }}>
        {copiado ? '¡COPIADO!' : 'COPIAR'}
      </button>
    </div>
  );
};

const Contacto = () => {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');

  const tieneWhatsapp = Boolean(contacto.whatsapp);
  const tieneDatosDonacion = Boolean(donaciones.alias || donaciones.cbu || donaciones.link);

  // Antes el form no hacía nada con lo que escribías: el botón mandaba siempre
  // el mismo texto fijo. Ahora arma el mensaje con nombre + mensaje reales.
  const enviar = e => {
    e.preventDefault();
    if (!nombre.trim() || !mensaje.trim()) {
      setError('Completá tu nombre y tu mensaje así te podemos responder.');
      return;
    }
    setError('');
    const texto = `Hola! Soy ${nombre.trim()}.\n${mensaje.trim()}\n\n(Enviado desde la web de Pasión Sí, Violencia No)`;
    window.open(`https://wa.me/${contacto.whatsapp}?text=${encodeURIComponent(texto)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section style={{ background: 'var(--bg-primary)', padding: '140px 0 100px 0', position: 'relative', minHeight: '100vh' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 64, alignItems: 'center' }}>

          {/* Columna Izquierda: Textos */}
          <div>
            <span style={{ color: 'var(--color-ong-red)', fontFamily: 'var(--font-body)', fontSize: 12, textTransform: 'uppercase', letterSpacing: 5, fontWeight: 700 }}>
              Sumate
            </span>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3.5rem, 8vw, 6.5rem)', color: 'var(--text-primary)', margin: '8px 0 24px', lineHeight: 0.9, letterSpacing: '1px', fontWeight: 400 }}>
              JUNTOS<br /><span style={{ color: 'var(--color-ong-red)' }}>PODEMOS</span><br />MÁS
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: 18, fontFamily: 'var(--font-body)', lineHeight: 1.8, marginBottom: 40, maxWidth: 480 }}>
              Si querés colaborar, donar, o llevar a los chicos de tu institución a vivir una experiencia única, escribinos. Cada gesto suma.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {redes.map(r => (
                <a key={r.nombre} href={r.url} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 16, color: 'var(--text-primary)', textDecoration: 'none', fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 500, transition: 'transform 0.2s', width: 'fit-content' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'translateX(8px)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'translateX(0)')}
                >
                  <span style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-ong-green)', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                    <RedesIcon nombre={r.nombre} />
                  </span>
                  <span><strong>{r.nombre}</strong> · {r.usuario}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Columna Derecha: Formulario */}
          <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: 32, padding: 'clamp(24px, 5vw, 48px)', boxShadow: '0 20px 40px rgba(0,0,0,0.04)' }}>
            {tieneWhatsapp ? (
              <form onSubmit={enviar} style={{ display: 'flex', flexDirection: 'column', gap: 24 }} noValidate>
                <div>
                  <label htmlFor="nombre" style={labelStyle}>Nombre</label>
                  <input id="nombre" type="text" placeholder="Tu nombre" value={nombre} onChange={e => setNombre(e.target.value)}
                    style={fieldStyle} onFocus={focusOn} onBlur={focusOff} autoComplete="name" />
                </div>
                <div>
                  <label htmlFor="mensaje" style={labelStyle}>Mensaje</label>
                  <textarea id="mensaje" rows={4} placeholder="¿Cómo querés participar?" value={mensaje} onChange={e => setMensaje(e.target.value)}
                    style={{ ...fieldStyle, resize: 'none' }} onFocus={focusOn} onBlur={focusOff} />
                </div>
                {error && (
                  <p role="alert" style={{ color: 'var(--color-ong-red)', fontFamily: 'var(--font-body)', fontSize: 14, margin: 0 }}>{error}</p>
                )}
                <button type="submit"
                  style={{ background: 'var(--color-ong-green)', color: '#fff', padding: '18px', borderRadius: 16, fontWeight: 700, fontSize: 16, border: 'none', cursor: 'pointer', fontFamily: 'var(--font-body)', marginTop: 8, boxShadow: '0 10px 20px rgba(76,122,79,0.3)', transition: 'transform 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.02)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                >
                  ENVIAR POR WHATSAPP
                </button>
              </form>
            ) : (
              // Sin número cargado todavía: en vez de un botón a un número falso,
              // mandamos a Instagram, que sí es real.
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 36, color: 'var(--text-primary)', margin: 0, fontWeight: 400, letterSpacing: 1 }}>ESCRIBINOS</h2>
                <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.7, margin: 0 }}>
                  La forma más rápida de contactarnos es por mensaje directo en Instagram.
                </p>
                <a href={igUrl} target="_blank" rel="noopener noreferrer"
                  style={{ background: 'var(--color-ong-green)', color: '#fff', padding: '18px', borderRadius: 16, fontWeight: 700, fontSize: 16, textDecoration: 'none', fontFamily: 'var(--font-body)', textAlign: 'center' }}>
                  MANDAR MENSAJE POR INSTAGRAM
                </a>
              </div>
            )}
          </div>
        </div>

        {/* DONACIONES — /contacto#donar */}
        <div id="donar" style={{ marginTop: 100, scrollMarginTop: 100, padding: 'clamp(28px, 5vw, 56px)', background: 'var(--color-ong-red-soft)', borderRadius: 32, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 48, alignItems: 'center' }}>
          <div>
            <span style={{ color: 'var(--color-ong-red)', fontFamily: 'var(--font-body)', fontSize: 12, textTransform: 'uppercase', letterSpacing: 5, fontWeight: 700 }}>
              Donaciones
            </span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--text-primary)', margin: '8px 0 16px', lineHeight: 0.95, fontWeight: 400 }}>
              CADA APORTE ES UNA <span style={{ color: 'var(--color-ong-red)' }}>SALIDA MÁS</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.7, margin: 0, maxWidth: 480 }}>
              Nuestro trabajo es 100% gratuito y se sostiene desde el compromiso y la pasión. Si podés, tu aporte nos ayuda a generar más salidas y experiencias para los chicos y chicas.
            </p>
          </div>

          <div style={{ background: 'var(--bg-secondary)', borderRadius: 24, padding: 'clamp(20px, 4vw, 32px)' }}>
            {tieneDatosDonacion ? (
              <>
                {donaciones.alias && <DatoCopiable label="Alias" valor={donaciones.alias} />}
                {donaciones.cbu && <DatoCopiable label="CBU / CVU" valor={donaciones.cbu} />}
                {donaciones.titular && (
                  <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', fontSize: 14, margin: '16px 0 0' }}>
                    Titular: <strong style={{ color: 'var(--text-primary)' }}>{donaciones.titular}</strong>
                  </p>
                )}
                {donaciones.link && (
                  <a href={donaciones.link} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'block', marginTop: 24, background: 'var(--color-ong-red)', color: '#fff', padding: 18, borderRadius: 16, fontWeight: 700, textAlign: 'center', textDecoration: 'none', fontFamily: 'var(--font-body)' }}>
                    DONAR ONLINE
                  </a>
                )}
              </>
            ) : (
              <>
                <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-primary)', fontSize: 16, lineHeight: 1.7, marginTop: 0 }}>
                  ¿Querés aportar dinero, entradas, ropa o mercadería para el merendero? Escribinos y te contamos cómo.
                </p>
                <a href={tieneWhatsapp ? `https://wa.me/${contacto.whatsapp}?text=${encodeURIComponent('Hola! Quiero hacer una donación a Pasión Sí, Violencia No.')}` : igUrl}
                  target="_blank" rel="noopener noreferrer"
                  style={{ display: 'block', background: 'var(--color-ong-red)', color: '#fff', padding: 18, borderRadius: 16, fontWeight: 700, textAlign: 'center', textDecoration: 'none', fontFamily: 'var(--font-body)' }}>
                  QUIERO DONAR
                </a>
              </>
            )}
          </div>
        </div>

        {/* APOYO EN REDES — el pedido principal de la ONG */}
        <div id="redes" style={{ marginTop: 48, scrollMarginTop: 100, padding: 'clamp(28px, 5vw, 56px)', background: 'var(--color-ong-green-soft)', borderRadius: 32 }}>
          <span style={{ color: 'var(--color-ong-green)', fontFamily: 'var(--font-body)', fontSize: 12, textTransform: 'uppercase', letterSpacing: 5, fontWeight: 700 }}>
            Lo único que pedimos es tu apoyo
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--text-primary)', margin: '8px 0 16px', lineHeight: 0.95, fontWeight: 400 }}>
            AYUDANOS A QUE EL MENSAJE <span style={{ color: 'var(--color-ong-green)' }}>LLEGUE MÁS LEJOS</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.7, margin: '0 0 32px', maxWidth: 720 }}>
            Cada interacción nos da visibilidad, y la visibilidad se transforma en más y mejores oportunidades para los chicos y chicas que participan de nuestras actividades.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: 16, marginBottom: 32 }}>
            {[
              [Smartphone, 'Seguinos en nuestras redes'],
              [Camera, 'Subí fotos y etiquetanos'],
              [MessageCircle, 'Comentá y compartí nuestras publicaciones'],
            ].map(([icono, texto]) => {
              const Icon = icono;
              return (
              <div key={texto} style={{ background: 'var(--bg-secondary)', borderRadius: 16, padding: '20px 24px', display: 'flex', gap: 14, alignItems: 'center', fontFamily: 'var(--font-body)', fontWeight: 700, color: 'var(--text-primary)' }}>
                <span aria-hidden="true" style={{ width: 48, height: 48, borderRadius: 14, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-ong-green-soft)', color: 'var(--color-ong-green)' }}>
                  <Icon size={24} strokeWidth={1.75} />
                </span>{texto}
              </div>
              );
            })}
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            {redes.map(r => (
              <a key={r.nombre} href={r.url} target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'var(--color-ong-green)', color: '#fff', padding: '14px 22px', borderRadius: 999, fontWeight: 700, textDecoration: 'none', fontFamily: 'var(--font-body)', transition: 'transform 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <RedesIcon nombre={r.nombre} size={20} /> {r.nombre.toUpperCase()}
              </a>
            ))}
          </div>

          <p style={{ fontFamily: 'var(--font-accent)', fontStyle: 'italic', fontSize: 22, color: 'var(--text-primary)', margin: '36px 0 0' }}>
            {lema}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
