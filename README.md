# Pasión Sí, Violencia No — Sitio web

Sitio institucional de la ONG **Pasión Sí, Violencia No** (con base en Lugano, CABA), que acompaña a chicos y chicas de espacios vulnerables de CABA y GBA a través del deporte, la cultura y los valores.

Desarrollado pro bono por [InnovaTI by LB](https://innovatibylb.com.ar/).

## Stack

- React 19 + Vite (rolldown-vite)
- React Router 7
- lucide-react (íconos)

## Correr en local

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # genera /dist para producción
npm run preview  # sirve /dist localmente
```

## Dónde se edita cada cosa

| Qué | Archivo |
|---|---|
| WhatsApp, Instagram, alias/CBU para donar | `src/data/contacto.js` |
| Actividades (título, texto, foto) | `src/data/actividades.js` |
| Valores de "Nosotros" | `src/data/nosotros.js` |
| Frases de la barra que se desliza | `src/data/hero.js` |
| Colores y tipografías | `src/index.css` (variables `:root`) |
| Fotos | `src/assets/images/` (usar `.webp`, máx. ~1400px) |

## Páginas

`/` Inicio · `/nosotros` · `/actividades` · `/contacto` (con sección `#donar`) · cualquier otra ruta → 404

## Deploy

Es una SPA: el hosting tiene que redirigir todas las rutas a `index.html`.
Ya está resuelto para **Vercel** (`vercel.json`) y **Netlify** (`public/_redirects`).
