MVP técnico completo — ecx2f.dev

Next.js (Pages Router) + Markdown + Netlify

0️⃣ prerequisitos (rápido)

asegúrate de tener:

Node.js LTS instalado

npm o pnpm (usa el que ya uses, no cambies hábitos)

cuenta en GitHub

cuenta en Netlify

1️⃣ crear el proyecto Next.js (inicio correcto)

en tu terminal:

crea el proyecto con el CLI oficial

usa create-next-app

cuando te pregunte:

TypeScript → opcional (elige lo que menos fricción te dé)

ESLint → sí

Tailwind → solo si ya lo usabas antes (si no, no)

src/ → opcional

App Router → NO

Pages Router → SÍ

import alias → opcional

📌 si eliges App Router, aborta y vuelve a empezar.
esto es clave.

resultado esperado:

pages/ existe

pages/index existe

npm run dev levanta la web

2️⃣ limpia el proyecto (muy importante)

antes de hacer nada:

borra:

ejemplos

textos default

estilos demo

deja:

una home vacía o mínima

CSS global limpio

📌 esto evita que el proyecto “herede” decisiones que no son tuyas.

3️⃣ estructura final del proyecto (definitiva)

organiza así:

/pages
  index
  /blog
    index
    [slug]
/posts
  my-first-post/
    index.md
    cover.png
/public
  noise.png
  avatar.png
/styles
  globals.css


reglas:

los .md NUNCA van en /pages

cada post vive en su carpeta

imágenes del post viven con el post

esto replica EXACTAMENTE tu flujo antiguo.

4️⃣ markdown: cómo debe funcionar (sin código)

tu sistema de blog debe hacer esto:

leer archivos .md desde /posts

extraer metadata:

título

fecha

convertir markdown → HTML

generar:

lista de posts en /blog

página individual /blog/slug

no metas:

MDX

componentes React en posts

embeds raros

markdown plano y humano.

5️⃣ landing (/)

la home SOLO debe tener:

un prompt tipo terminal:

$ whoami

nombre grande:

ecx

una línea:

“low-level, backend, and random notes”

links:

./blog

./projects (aunque esté vacío)

si dudas si algo va en la home, no va.

6️⃣ blog (/blog)
/blog

lista simple

ordenada por fecha

cada item:

título

fecha

clickeable

/blog/[slug]

título

fecha

contenido renderizado

imágenes inline

sin sidebar
sin comentarios
sin widgets

7️⃣ estilos (reglas duras)

no empieces diseñando, solo fija reglas:

fondo oscuro

tipografía mono o muy neutra

grid / noise sutil

colores fríos (azul, gris)

animaciones mínimas

si algo distrae del texto, elimínalo.

8️⃣ git y repo (antes del deploy)

inicializa git

crea repo en GitHub

primer commit:

proyecto limpio

push a main

📌 no deployes sin tener esto bien.

9️⃣ deploy en NETLIFY (paso a paso real)
A. conectar repo

entra a Netlify

“Add new site” → “Import an existing project”

conecta GitHub

selecciona el repo

B. configuración de build (IMPORTANTE)

en Netlify:

Build command

npm run build


Publish directory

.next


Framework preset

Next.js

📌 Netlify ya soporta Next.js SSR, no necesitas hacks.

C. variables (si usas imágenes o paths)

no necesitas variables ahora

mantén todo simple

D. deploy

haz deploy

espera a que build pase

revisa que:

/ carga

/blog carga

un post abre

🔟 conectar el dominio ecx2f.dev

en Netlify → Domain settings

“Add custom domain”

escribe ecx2f.dev

sigue instrucciones DNS:

apunta nameservers o records desde Namecheap

espera propagación

HTTPS automático

cuando veas el candado → listo.

1️⃣1️⃣ definición estricta de MVP (NO negociable)

el MVP está terminado cuando:

el dominio abre

la home se ve

hay 1 post real

puedes añadir otro .md sin tocar código

nada más.

consejo final (ingeniero a ingeniero)

no optimices:

SEO

performance

accesibilidad avanzada

diseño fino

eso viene después de escribir.

si quieres, el siguiente paso natural es:

definir el contenido exacto del primer post

o diseñar el layout visual mínimo (grid, spacing, font)

elige uno y seguimos.