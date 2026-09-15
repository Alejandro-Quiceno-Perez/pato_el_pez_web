# Pato el Pez Web

Sitio oficial de la banda Pato el Pez, con presentación del proyecto, música, merch, recorrido, prensa y comunidad de fans.

## Características

- Presentación de la banda
- Catálogo de música
- Merchandising
- Historia y recorrido
- Sección de fan club
- Videos y prensa
- Diseño responsive

## Stack

- React
- Vite
- React Router
- CSS modularizado por sección
- Datos locales en archivos JavaScript

## Estructura del proyecto

```text
.
├── public/
│   ├── documents/
│   ├── images/
│   └── videos/
├── scripts/
├── src/
│   ├── animations/
│   ├── components/
│   ├── db/
│   ├── pages/
│   ├── routes/
│   ├── services/
│   ├── styles/
│   ├── utils/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .env.example
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Instalación

```bash
npm install
npm run dev
```

## Producción

```bash
npm run build
npm run preview
```

## Variables de entorno

Crea un archivo `.env` a partir de `.env.example` con tu configuración local:

```bash
VITE_GOOGLE_SCRIPT_URL=tu_url_del_google_script
```

## Mejoras futuras

- Panel administrativo
- Base de datos real
- Integración de pagos
- Newsletter
- Comunidad de fans
