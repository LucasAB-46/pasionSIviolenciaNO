import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Cada vez que cambia la ruta, volvemos arriba de todo.
// Antes, si tocabas "SUMARTE" o "DONAR" desde abajo de la página,
// Contacto se abría scrolleado a la mitad.
// Si la URL trae #ancla (ej: /contacto#donar), scrolleamos a esa sección.
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
