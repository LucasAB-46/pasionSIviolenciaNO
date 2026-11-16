// src/data/contacto.js
// ÚNICO lugar donde se cargan los datos de contacto, redes y donación.
// Si algo cambia, se edita acá y se actualiza todo el sitio.

export const contacto = {
  // WhatsApp: código país + 9 + área + número, sin "+", sin espacios, sin el 15.
  whatsapp: '5491167475837',
  email: '',
};

export const redes = [
  { nombre: 'Instagram', usuario: '@pasionsi_violenciano.ong', url: 'https://www.instagram.com/pasionsi_violenciano.ong' },
  { nombre: 'TikTok', usuario: '@pasionsiviolenciano', url: 'https://www.tiktok.com/@pasionsiviolenciano' },
  { nombre: 'Facebook', usuario: 'Pasión Sí, Violencia No', url: 'https://www.facebook.com/share/1HcEAWrvbu/' },
];

export const donaciones = {
  alias: 'benilucalourdes',
  cbu: '0000003100001922447331', // CVU
  titular: 'Leonardo Ariel Campos',
  link: '', // Mercado Pago / Cafecito, si algún día tienen
};

export const lema = 'La pasión se comparte, la violencia no.';
