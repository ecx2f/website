# ecx2f.dev

MVP técnico completo — Next.js (Pages Router) + Markdown + Netlify

## Setup

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

## Estructura

- `/pages` - Páginas Next.js
- `/posts` - Posts en markdown (cada post en su carpeta con `index.md`)
- `/public` - Archivos estáticos
- `/styles` - CSS modules

## Agregar un post

1. Crea una carpeta en `/posts` (ej: `my-post`)
2. Crea `index.md` dentro con frontmatter:
   ```markdown
   ---
   title: My Post Title
   date: 2024-01-15
   ---
   
   Contenido aquí...
   ```

## Build para producción

```bash
npm run build
```

## Deploy a Netlify

1. Push a GitHub
2. Conecta repo en Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Framework preset: Next.js

