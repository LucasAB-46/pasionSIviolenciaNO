// src/data/actividades.js
import imgCampeones from '../assets/images/campeones.png';
import imgHinchas from '../assets/images/hinchas.png';
import imgButacas from '../assets/images/butacas.png';
import imgClub from '../assets/images/club.png';
import imgConBandera from '../assets/images/conBandera.png';
import imgChicos from '../assets/images/chicos.png';

export const actividades = [
  { 
    titulo: 'La Selección Argentina', 
    desc: 'Cumplimos el sueño de los chicos de conocer a la Selección. Lloraron de emoción.', 
    emoji: '🇦🇷', 
    tag: 'Sueño cumplido', 
    color: 'var(--color-ong-green)',
    imagen: imgCampeones
  },
  { 
    titulo: 'Show del Hincha', 
    desc: 'Un espectáculo de tremenda dimensión que les mostró a los pibes otras posibilidades.', 
    emoji: '⭐', 
    tag: 'Cultura', 
    color: 'var(--color-ong-red)',
    imagen: imgHinchas
  },
  { 
    titulo: 'Circo Rodas', 
    desc: 'Para muchos fue la primera vez en un circo. Quedaron enamorados del espectáculo.', 
    emoji: '🎪', 
    tag: 'Primera vez', 
    color: 'var(--color-ong-green)',
    imagen: imgButacas
  },
  { 
    titulo: 'Partidos en la cancha', 
    desc: 'Llevamos a los chicos a vivir la experiencia de una cancha profesional.', 
    emoji: '⚽', 
    tag: 'Deporte', 
    color: 'var(--color-ong-blue, #3498db)',
    imagen: imgClub
  },
  { 
    titulo: 'Argentina vs Venezuela', 
    desc: 'Boletos especiales para que los pibes vivieran un partido de la Selección.', 
    emoji: '🏟️', 
    tag: 'Selección', 
    color: 'var(--color-ong-green)',
    imagen: imgConBandera
  },
  { 
    titulo: 'Merendero & Contención', 
    desc: 'Trabajamos junto al Merendero Jesús es Tu Amigo para acompañar a los chicos.', 
    emoji: '🫶', 
    tag: 'Comunidad', 
    color: 'var(--color-ong-red)',
    imagen: imgChicos
  },
];