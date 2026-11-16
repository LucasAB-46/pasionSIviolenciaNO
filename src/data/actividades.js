// src/data/actividades.js
// icon: nombre de un ícono de lucide-react (se resuelve en Actividades.jsx)
import imgCampeones from '../assets/images/campeones.webp';
import imgHinchas from '../assets/images/hinchas.webp';
import imgButacas from '../assets/images/butacas.webp';
import imgClub from '../assets/images/club.webp';
import imgConBandera from '../assets/images/conBandera.webp';
import imgChicos from '../assets/images/chicos.webp';

export const actividades = [
  {
    titulo: 'Festejo de campeones',
    desc: 'Acompañamos a los chicos y chicas de La 17 a celebrar su campeonato. Cada logro de los pibes merece festejarse en comunidad.',
    icon: 'Trophy',
    tag: 'Logros',
    color: 'var(--color-ong-green)',
    imagen: imgCampeones
  },
  {
    titulo: 'Show del Hincha',
    desc: 'Un espectáculo de tremenda dimensión que les mostró a los pibes otras posibilidades.',
    icon: 'Star',
    tag: 'Cultura',
    color: 'var(--color-ong-red)',
    imagen: imgHinchas
  },
  {
    titulo: 'Circo Rodas',
    desc: 'Para muchos fue la primera vez en un circo. Quedaron enamorados del espectáculo.',
    icon: 'Tent',
    tag: 'Primera vez',
    color: 'var(--color-ong-green)',
    imagen: imgButacas
  },
  {
    titulo: 'Partidos en la cancha',
    desc: 'Llevamos a los chicos a vivir la experiencia de una cancha profesional.',
    icon: 'Goal',
    tag: 'Deporte',
    color: 'var(--color-ong-blue)',
    imagen: imgClub
  },
  {
    titulo: 'Salimos todos juntos',
    desc: 'Cada salida arranca igual: chicos, chicas, familias y voluntarios, todos juntos y con la bandera de Pasión Sí, Violencia No bien en alto.',
    icon: 'Flag',
    tag: 'Salidas',
    color: 'var(--color-ong-green)',
    imagen: imgConBandera
  },
  {
    titulo: 'Merendero & Contención',
    desc: 'Trabajamos junto al Merendero Jesús es Tu Amigo para acompañar a los chicos.',
    icon: 'HandHeart',
    tag: 'Comunidad',
    color: 'var(--color-ong-red)',
    imagen: imgChicos
  },
];
